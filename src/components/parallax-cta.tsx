"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

function SoftwarePipelineAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    
    // Set canvas dimensions based on scrollable parent size
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth
      height = canvas.height = canvas.parentElement?.offsetHeight || 600
    }
    window.addEventListener("resize", handleResize)

    // Git Branches configuration
    const branchY = [height * 0.28, height * 0.5, height * 0.72]
    const colors = [
      "hsla(145, 90%, 45%, ",  // main (emerald green)
      "hsla(210, 95%, 55%, ",  // develop (softline blue)
      "hsla(260, 90%, 60%, "   // feature (indigo/purple)
    ]
    const branchNames = ["main", "develop", "feature"]

    interface CommitNode {
      id: string
      branchId: number
      x: number
      y: number
      hash: string
      label: string
      alpha: number
      pulse: number
      size: number
      
      // Connecting parent line coordinates
      parentX?: number
      parentY?: number
      
      // Connecting merge line coordinates (optional)
      mergeParentX?: number
      mergeParentY?: number
    }

    interface CodeSnippet {
      x: number
      y: number
      text: string
      vx: number
      vy: number
      alpha: number
      size: number
    }

    interface FlowParticle {
      x: number
      y: number
      targetX: number
      targetY: number
      progress: number
      speed: number
      char: string
      branchId: number
      
      // For curves
      isCurve: boolean
      p0x?: number
      p0y?: number
      p1x?: number
      p1y?: number
      p2x?: number
      p2y?: number
      p3x?: number
      p3y?: number
    }

    interface Spark {
      x: number
      y: number
      vx: number
      vy: number
      color: string
      alpha: number
      size: number
    }

    const commits: CommitNode[] = []
    const codeSnippets: CodeSnippet[] = []
    const flowParticles: FlowParticle[] = []
    const sparks: Spark[] = []

    const scrollSpeed = 0.55 // Scroll graph left
    const codeLibrary = [
      "const app = express()",
      "npm run dev",
      "git commit -m 'feat: auth'",
      "SELECT * FROM users",
      "import { useState } from 'react'",
      "docker build -t api .",
      "npm i @softline/core",
      "await db.connect()",
      "pip install tensorflow",
      "cargo build --release",
      "go get github.com/gin",
      "systemctl restart nginx",
      "kubectl get pods",
      "const { data } = useQuery()",
      "console.log('Running...')"
    ]

    const commitLabels = [
      "feat: login", "fix: db", "refactor: api", "docs: readme", 
      "ci: deploy", "feat: payment", "perf: optimization", 
      "style: format", "test: auth", "chore: deps"
    ]

    // Helper to get random hash
    const getRandomHash = () => Math.random().toString(16).substring(2, 7)

    // Helper for Bezier curve interpolation
    const getBezierPoint = (t: number, p0: number, p1: number, p2: number, p3: number) => {
      const oneMinusT = 1 - t
      return (
        oneMinusT * oneMinusT * oneMinusT * p0 +
        3 * oneMinusT * oneMinusT * t * p1 +
        3 * oneMinusT * t * t * p2 +
        t * t * t * p3
      )
    }

    // Keep track of the latest commit on each branch to establish parental linkages
    const latestCommits: (CommitNode | null)[] = [null, null, null]

    // Create a new commit node
    const createCommitNode = (x: number, branchId: number, isMerge = false, isBranch = false) => {
      const y = branchY[branchId]
      const hash = getRandomHash()
      const label = isMerge ? "merge" : isBranch ? "branch" : commitLabels[Math.floor(Math.random() * commitLabels.length)]
      
      const newCommit: CommitNode = {
        id: Math.random().toString(),
        branchId,
        x,
        y,
        hash,
        label,
        alpha: 0, // Fade in
        pulse: 0,
        size: branchId === 0 ? 5 : branchId === 1 ? 4.5 : 4
      }

      // Establish connections
      if (isBranch) {
        // Parent is on Develop branch (branchId 1)
        const parent = latestCommits[1]
        if (parent) {
          newCommit.parentX = parent.x
          newCommit.parentY = parent.y
        }
      } else {
        // Parent is latest commit on same branch
        const parent = latestCommits[branchId]
        if (parent) {
          newCommit.parentX = parent.x
          newCommit.parentY = parent.y
        }
      }

      if (isMerge) {
        // Connect to latest on Feature branch (branchId 2) as well
        const featureParent = latestCommits[2]
        if (featureParent) {
          newCommit.mergeParentX = featureParent.x
          newCommit.mergeParentY = featureParent.y
        }
      }

      commits.push(newCommit)
      latestCommits[branchId] = newCommit

      // Periodically spawn particles along the new connection
      if (newCommit.parentX !== undefined && newCommit.parentY !== undefined) {
        spawnFlowParticles(newCommit)
      }

      return newCommit
    }

    const spawnFlowParticles = (commit: CommitNode) => {
      if (commit.parentX === undefined || commit.parentY === undefined) return
      const count = Math.floor(Math.random() * 2) + 1
      const isCurve = commit.parentY !== commit.y
      
      for (let i = 0; i < count; i++) {
        const speed = 0.006 + Math.random() * 0.006
        const char = Math.random() > 0.5 ? "1" : "0"
        
        const particle: FlowParticle = {
          x: commit.parentX,
          y: commit.parentY,
          targetX: commit.x,
          targetY: commit.y,
          progress: 0,
          speed,
          char,
          branchId: commit.branchId,
          isCurve
        }

        if (isCurve) {
          particle.p0x = commit.parentX
          particle.p0y = commit.parentY
          particle.p1x = commit.parentX + (commit.x - commit.parentX) * 0.5
          particle.p1y = commit.parentY
          particle.p2x = commit.parentX + (commit.x - commit.parentX) * 0.5
          particle.p2y = commit.y
          particle.p3x = commit.x
          particle.p3y = commit.y
        }

        // Delay starting progress slightly to scatter them
        particle.progress = -Math.random() * 0.3
        flowParticles.push(particle)
      }
    }

    // Initialize commits across the width
    const initCommits = () => {
      // 1. Establish an initial main commit
      let currentX = 60
      const c1 = createCommitNode(currentX, 0) // main
      c1.alpha = 1
      latestCommits[0] = c1

      // 2. Establish develop branch init
      currentX += 120
      const c2 = createCommitNode(currentX, 1, false, true) // develop branches off main
      c2.alpha = 1
      latestCommits[1] = c2

      // 3. Alternate commits on branches to populate canvas
      while (currentX < width + 100) {
        currentX += 130 + Math.random() * 50
        const rand = Math.random()
        let node: CommitNode

        if (rand < 0.4) {
          // main commit
          node = createCommitNode(currentX, 0)
        } else if (rand < 0.75) {
          // develop commit
          node = createCommitNode(currentX, 1)
        } else {
          // branch to feature or feature commit
          const hasFeature = latestCommits[2] !== null
          if (!hasFeature) {
            node = createCommitNode(currentX, 2, false, true) // Branch off develop
          } else {
            if (Math.random() > 0.6) {
              node = createCommitNode(currentX, 1, true) // Merge feature to develop
              latestCommits[2] = null // Reset feature branch until next branch
            } else {
              node = createCommitNode(currentX, 2)
            }
          }
        }
        node.alpha = 1
      }
    }

    initCommits()

    // Initialize background code snippets
    const codeSnippetCount = 12
    for (let i = 0; i < codeSnippetCount; i++) {
      codeSnippets.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: codeLibrary[Math.floor(Math.random() * codeLibrary.length)],
        vx: -(0.1 + Math.random() * 0.18),
        vy: (Math.random() - 0.5) * 0.05,
        alpha: 0.03 + Math.random() * 0.09,
        size: 10 + Math.random() * 4
      })
    }

    // Track mouse
    let mouseX = -1000
    let mouseY = -1000
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }
    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    let spawnTimer = 0

    // Utility to fade canvas elements smoothly near the top and bottom borders (improves light-theme continuity)
    const getEdgeAlpha = (yVal: number) => {
      const borderDist = 95 // Distance in pixels to apply fade-out effect
      if (yVal < borderDist) return yVal / borderDist
      if (yVal > height - borderDist) return (height - yVal) / borderDist
      return 1
    }

    // Main Draw loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // --- 1. Draw Code Snippets ---
      ctx.font = "12px Consolas, Fira Code, Monaco, monospace"
      for (const snippet of codeSnippets) {
        snippet.x += snippet.vx
        snippet.y += snippet.vy
        
        // Wrap horizontally
        if (snippet.x < -200) {
          snippet.x = width + 50
          snippet.y = Math.random() * height
          snippet.text = codeLibrary[Math.floor(Math.random() * codeLibrary.length)]
        }
        // Wrap vertically slightly
        if (snippet.y < 0) snippet.y = height
        if (snippet.y > height) snippet.y = 0

        const edgeAlpha = getEdgeAlpha(snippet.y)
        ctx.fillStyle = `rgba(148, 163, 184, ${snippet.alpha * edgeAlpha})`
        ctx.font = `${snippet.size}px Consolas, Fira Code, monospace`
        ctx.fillText(snippet.text, snippet.x, snippet.y)
      }

      // --- 2. Update Commits (Scroll) ---
      for (let i = commits.length - 1; i >= 0; i--) {
        const c = commits[i]
        c.x -= scrollSpeed
        if (c.parentX !== undefined) c.parentX -= scrollSpeed
        if (c.mergeParentX !== undefined) c.mergeParentX -= scrollSpeed

        // Fade in
        if (c.alpha < 1) c.alpha += 0.02

        // Pulsing factor
        c.pulse += 0.03

        // Remove offscreen
        if (c.x < -150) {
          commits.splice(i, 1)
        }
      }

      // --- 3. Draw Branch Lines (Git history lines) ---
      for (const c of commits) {
        if (c.parentX !== undefined && c.parentY !== undefined) {
          ctx.beginPath()
          const color = colors[c.branchId]
          const avgY = (c.parentY + c.y) / 2
          const edgeAlpha = getEdgeAlpha(avgY)
          ctx.strokeStyle = color + `${c.alpha * 0.23 * edgeAlpha})`
          ctx.lineWidth = 1.6

          if (c.parentY === c.y) {
            // Straight line
            ctx.moveTo(c.parentX, c.parentY)
            ctx.lineTo(c.x, c.y)
          } else {
            // Cubic Bezier S-Curve
            ctx.moveTo(c.parentX, c.parentY)
            const cp1X = c.parentX + (c.x - c.parentX) * 0.5
            const cp1Y = c.parentY
            const cp2X = c.parentX + (c.x - c.parentX) * 0.5
            const cp2Y = c.y
            ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, c.x, c.y)
          }
          ctx.stroke()
        }

        // Draw merge lines
        if (c.mergeParentX !== undefined && c.mergeParentY !== undefined) {
          ctx.beginPath()
          const avgY = (c.mergeParentY + c.y) / 2
          const edgeAlpha = getEdgeAlpha(avgY)
          // Use feature color for incoming merges
          ctx.strokeStyle = colors[2] + `${c.alpha * 0.23 * edgeAlpha})`
          ctx.lineWidth = 1.4
          ctx.moveTo(c.mergeParentX, c.mergeParentY)
          const cp1X = c.mergeParentX + (c.x - c.mergeParentX) * 0.5
          const cp1Y = c.mergeParentY
          const cp2X = c.mergeParentX + (c.x - c.mergeParentX) * 0.5
          const cp2Y = c.y
          ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, c.x, c.y)
          ctx.stroke()
        }
      }

      // --- 4. Draw & Update Flow Particles (Binary Data) ---
      ctx.font = "10px Consolas, Fira Code, monospace"
      for (let i = flowParticles.length - 1; i >= 0; i--) {
        const p = flowParticles[i]
        p.progress += p.speed

        // Update particle scroll position relative to parent coordinates
        p.x -= scrollSpeed
        p.targetX -= scrollSpeed
        if (p.p0x !== undefined) {
          p.p0x -= scrollSpeed
          p.p1x! -= scrollSpeed
          p.p2x! -= scrollSpeed
          p.p3x! -= scrollSpeed
        }

        if (p.progress >= 1) {
          flowParticles.splice(i, 1)
          continue
        }

        // Only render and calculate coordinates once progress > 0
        if (p.progress > 0) {
          let currX = 0
          let currY = 0

          if (!p.isCurve) {
            // Linear interpolate
            currX = p.x + (p.targetX - p.x) * p.progress
            currY = p.y + (p.targetY - p.y) * p.progress
          } else {
            // Bezier interpolate
            currX = getBezierPoint(p.progress, p.p0x!, p.p1x!, p.p2x!, p.p3x!)
            currY = getBezierPoint(p.progress, p.p0y!, p.p1y!, p.p2y!, p.p3y!)
          }

          const edgeAlpha = getEdgeAlpha(currY)
          const color = colors[p.branchId]
          ctx.fillStyle = color + `${0.6 * edgeAlpha})`
          ctx.fillText(p.char, currX, currY - 3)
          
          // Draw tiny core spark
          ctx.beginPath()
          ctx.arc(currX, currY, 1.2, 0, Math.PI * 2)
          ctx.fillStyle = color + `${0.9 * edgeAlpha})`
          ctx.fill()
        }
      }

      // --- 5. Draw Commit Nodes ---
      for (const c of commits) {
        const color = colors[c.branchId]
        const distToMouse = Math.hypot(c.x - mouseX, c.y - mouseY)
        const isHovered = distToMouse < 60
        const edgeAlpha = getEdgeAlpha(c.y)
        
        // Pulse aura
        const basePulse = Math.sin(c.pulse) * 1.5 + 2
        const glowRadius = isHovered ? c.size * 2.5 : c.size * 1.8 + basePulse

        ctx.beginPath()
        ctx.arc(c.x, c.y, glowRadius, 0, Math.PI * 2)
        ctx.fillStyle = color + `${c.alpha * 0.08 * edgeAlpha})`
        ctx.fill()

        // Outer ring
        ctx.beginPath()
        ctx.arc(c.x, c.y, c.size + (isHovered ? 3 : 1), 0, Math.PI * 2)
        ctx.strokeStyle = color + `${c.alpha * 0.7 * edgeAlpha})`
        ctx.lineWidth = 1.2
        ctx.stroke()

        // Inner solid core
        ctx.beginPath()
        ctx.arc(c.x, c.y, isHovered ? c.size + 1.2 : c.size - 1.2, 0, Math.PI * 2)
        ctx.fillStyle = isHovered ? `rgba(255, 255, 255, ${edgeAlpha})` : color + `${c.alpha * edgeAlpha})`
        ctx.fill()

        // Draw labels/hashes above nodes
        if (c.alpha > 0.4 && edgeAlpha > 0.1) {
          ctx.font = "8px Consolas, Fira Code, monospace"
          ctx.fillStyle = `rgba(148, 163, 184, ${c.alpha * 0.45 * edgeAlpha})`
          ctx.textAlign = "center"
          // Show hash
          ctx.fillText(c.hash, c.x, c.y - c.size - 8)
          // Show commit label on hover or higher opacity
          if (isHovered) {
            ctx.fillStyle = `rgba(255, 255, 255, ${edgeAlpha})`
            ctx.font = "bold 9px Consolas, Fira Code, monospace"
            ctx.fillText(c.label, c.x, c.y + c.size + 12)
            
            // Spawn spark particles occasionally on hover
            if (Math.random() < 0.15) {
              sparks.push({
                x: c.x,
                y: c.y,
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,
                color,
                alpha: edgeAlpha,
                size: 1 + Math.random() * 2
              })
            }
          }
        }
      }

      // --- 6. Update & Draw Mouse sparks ---
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx
        s.y += s.vy
        s.alpha -= 0.02
        if (s.alpha <= 0) {
          sparks.splice(i, 1)
          continue
        }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = s.color + `${s.alpha})`
        ctx.fill()
      }

      // --- 7. Spawn logic ---
      // Regularly spawn new commit nodes on the right side
      spawnTimer++
      if (spawnTimer > 180 + Math.random() * 100) {
        spawnTimer = 0
        const rand = Math.random()
        const currentX = width + 80

        if (rand < 0.35) {
          // main commit
          createCommitNode(currentX, 0)
        } else if (rand < 0.7) {
          // develop commit
          createCommitNode(currentX, 1)
        } else {
          // feature branch / merge flow
          const hasFeature = latestCommits[2] !== null
          if (!hasFeature) {
            createCommitNode(currentX, 2, false, true) // branch off develop
          } else {
            if (Math.random() > 0.5) {
              createCommitNode(currentX, 1, true) // merge back to develop
              latestCommits[2] = null
            } else {
              createCommitNode(currentX, 2)
            }
          }
        }
      }

      // Draw faint git branch guide text at left side
      ctx.textAlign = "left"
      ctx.font = "bold 9px Consolas, Fira Code, monospace"
      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = colors[i] + "0.35)"
        ctx.fillText(`[branch: ${branchNames[i]}]`, 15, branchY[i] - 10)
        
        // Guide dashed lines
        ctx.beginPath()
        ctx.setLineDash([5, 8])
        ctx.strokeStyle = colors[i] + "0.08)"
        ctx.moveTo(15, branchY[i])
        ctx.lineTo(width, branchY[i])
        ctx.stroke()
        ctx.setLineDash([]) // Reset dash
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-65 mix-blend-screen pointer-events-none"
    />
  )
}

export function ParallaxCTA() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll position of the section to create the parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform background translation to make it move slower than content
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[380px] md:h-[450px] overflow-hidden flex items-center justify-center border-y border-border/40 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Parallax Background Container */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 h-[130%] w-full"
      >
        {/* Abstract Tech Grid with gradient overlay */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 dark:from-blue-900/30 via-slate-50 dark:via-slate-950 to-slate-50 dark:to-slate-950 transition-colors duration-300 z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
        <SoftwarePipelineAnimation />
      </motion.div>

      {/* Top fade (fixed relative to container): transitions from active theme background to transparent */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      {/* Bottom fade (fixed relative to container): transitions from transparent to solid slate-950 (ContactSection) */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Foreground Content */}
      <div className="container px-4 relative z-20 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative text-center p-8 md:p-12 rounded-3xl bg-white/70 dark:bg-slate-950/45 backdrop-blur-[8px] border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl space-y-6 overflow-hidden transition-all duration-300"
        >
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.01] dark:from-white/[0.02] via-transparent to-black/[0.02] dark:to-white/[0.04] pointer-events-none" />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-bold uppercase tracking-widest text-xs mb-2">
              <Sparkles className="h-4 w-4" />
              <span>SOFT LINE SISTEMAS</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {t("parallax.title")}
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
              {t("parallax.desc")}
            </p>
          </div>

          <div className="pt-4">
            <Button 
              size="lg" 
              className="h-12 px-8 rounded-full bg-primary hover:bg-primary/95 text-white font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.03] transition-all duration-300" 
              asChild
            >
              <Link href="#contato">
                {t("parallax.btn")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
