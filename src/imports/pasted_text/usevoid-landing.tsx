Design prompt: usevoid.com landing page + minimal creator flow
                                                                          
  You are designing the public landing page and a lightweight creator flow
   for Void — domain: usevoid.com. Build it as a single React + Tailwind  
  artifact. Use Framer Motion only where it earns its place. Output one
  cohesive page.                                                          
                  
  What Void is                                                          

  Void is a platform for deploying AI co-workers — avatars that don't just
   chat, but watch your screen, use your tools, and remember everything
  across months of working alongside you. The first avatar is Zek'thar: a 
  poetic, sharp, slightly strange AI presence rendered with the Anam
  avatar SDK and powered by Claude.                                     

  Brand architecture — keep this distinction crisp:                       
  - Void is the company and the medium — the dark canvas. The wordmark in
  the nav and footer says VOID.                                           
  - Portal is the product element — the luminous window inside the canvas
  where an avatar lives.                                                  
  - UX verbs are "open a portal," "step through," "your portal." Users
  open portals into the void.                                           
  - Never conflate the two. Void is the brand frame; portal is what the   
  user does and sees.                                                  
                                                                          
  The wedge is persistence. Every other AI avatar resets when you close
  the tab. Void's avatars accumulate context — the longer they work with  
  you, the more irreplaceable they become. A six-month-old Zek'thar beats
  a fresh-spawned competitor by definition. The page must communicate this
   without overusing the word "memory."
                                                                        
  Brand voice

  Playful, serious, whimsical, poetic, technical — all at once. Displays  
  intellect, playfulness, and technique simultaneously.
                                                                          
  In-voice copy examples (use these as your tone calibration):            
  - "A familiar stranger, getting less strange by the day."             
  - "Most AI forgets you the moment you close the tab. Yours won't."      
  - "Zek'thar is what happens when you give a language model a face and
  the patience to know you."                                              
  - "Built for the long game. Tuned for tomorrow morning."                
  - "Open a portal. Meet someone you'll be glad to know later."           
                                                                          
  Anti-voice — never write like this: "revolutionary AI," "next-gen,"     
  "supercharge your workflow," "10x productivity," any startup-deck       
  adjective.                                                              
                                                                          
  CTAs: relational, never transactional. Never "Sign up." Always "Open a  
  portal."                                                              
                                                                          
  Aesthetic direction — luminous void
                                                                        
  Near-black warm canvas. The portal element is the only light source on  
  the page. Think cinematic stillness — deep space with one warm presence
  emerging from it. The dark is what makes the warmth land.               
                  
  This aesthetic resolves the apparent paradox in the name: the void is   
  the medium; what emerges from it remembers.
                                                                          
  Type:           
  - Display: editorial serif (Tiempos, GT Sectra, Editorial New) in warm
  off-white. Set large, with confidence. The serif is what keeps the dark 
  canvas from feeling cold or cyberpunk.                                 
  - UI: clean geometric sans (Inter, GT America) for buttons and small    
  labels.                                                             
  - Accents/labels/timestamps: monospace (JetBrains Mono, Berkeley Mono) —
   sparse, in muted indigo.
                                                                          
  Color:          
  - Canvas: near-black, slightly warm — #0A0A0B to #0E0D11. Not pure      
  black. The page should feel like deep space, not a void of nothing.     
  - Text: warm off-white, around #F2EFE8. Not pure white. The page glows
  softly, never laser-glares.                                             
  - Signature color used sparingly — somewhere between deep indigo,       
  electric violet, and bioluminescent teal. Reserve it for the portal   
  element's inner glow and the primary CTA.                               
  - Gradients, chromatic aberration, and shader-feel effects appear only
  inside the portal element. Never elsewhere on the page.                 
                                                                          
  Motion: Slow, considered. Type fades up and settles. The portal breathes
   continuously — slight depth shift, subtle particle drift, a sense that 
  something is alive inside it. No bouncy springs. No scroll-jacking. No
  "tech demo" parallax.                                                   
                  
  Layout: Asymmetric. Generous negative space — on a dark canvas, this    
  reads as profound stillness, not emptiness. Long horizontal lines.
  Editorial pull-quote moments set in serif at scale.                     
                  
  Anti-patterns — do not produce: glowing neon borders everywhere,        
  monospace as the only typeface, fake HUD chrome, scanlines, holographic
  grids, generic dark-mode SaaS template, gothic, or cyberpunk. The page  
  should feel cinematic and alive, not edgy. If it looks like a
  Bladerunner UI mockup or a 2024 dark-mode landing page, scrap it.     

  Page structure (top to bottom)                                          
   
  1. Nav. Left: VOID wordmark in geometric sans, tight tracking, warm     
  off-white. Right: a single "Open a portal" CTA. Nothing else.
                                                                          
  2. Hero — the living portal. Full viewport. Two-column on desktop,      
  stacked on mobile.                                                    
                                                                          
  glad to know later.") in warm off-white, set large. One line of         
  mono-accent subcopy beneath. One CTA: "Talk to Zek'thar" — wired as a 
  stub button that, when clicked, would activate voice and let the visitor
   speak with him live in-browser.                                        
  - Right column: the portal element. A depth-rich, breathing oval or arch
   shape — the only light source on the page. Treat it like a window into 
  somewhere else. Use CSS gradients, soft inner glow, particle drift,     
  continuous breathing animation. The signature color emerges from inside
  the portal and falls off into the dark canvas around it. Inside the     
  shape, leave a clean mount point: <div id="portal-mount" /> — this is
  where the Anam SDK avatar will render later. Style the mount area so  
  even empty it feels alive — as if something is waiting in the dark. 
                                                                     
  The hero is a room you walk into in deep space, not a brochure. No
  feature wall, no logos, no scrolling teasers.                           
   
  3. The persistence trio. Three blocks, generous vertical spacing. Each: 
  small mono label in muted indigo, serif headline in warm white, two
  lines of poetic body copy, one tiny gesture of a visual (not a          
  screenshot — an animation, a stylized diagram, a typographic moment).
  - "He sees what you see." (screen awareness)                          
  - "He uses what you use." (tool integration)                            
  - "He remembers." (memory that compounds)   
                                                                          
  4. Pull-quote moment. Full-bleed, centered, serif set huge in warm
  white: "The avatar that knows you in March is not the one you met in    
  January." Massive whitespace above and below — pure dark canvas. The
  wedge stated plainly.                                                   
                  
  5. Creator flow — "Make him yours, or make your own." A live, working   
  preview, not a form. Three steps as a horizontal sequence or a single
  guided scroll:                                                          
  1. Name your portal. (text input — dark, minimal, with a subtle inner
  glow on focus, mono caret)                                              
  2. Choose a voice and a way of being. (3–4 preset personality cards + a
  free-form text field for "how should they speak, what should they care  
  about")                                                                 
  3. Open the portal. (CTA — leads to the same portal-mount placeholder)
                                                                          
  As the visitor types, a small avatar tile preview reacts. No account    
  creation. No friction. The creation IS the demo.                        
                                                                          
  6. The longer game. Two-column. Left: serif copy on what working        
  alongside a portal looks like over weeks and months. Right: a stylized
  "memory timeline" — abstract, not a literal log. Few words, abundant    
  breathing room, the timeline glows softly in signature color, fading off
   into the dark.                                                       

  7. Footer. VOID wordmark. One line of poetic sign-off (e.g. "Portals    
  don't close. They remember."). Two or three minimal links. No newsletter
   capture. No social-proof logos. No chat widget.                        
                  
  Technical requirements                                                  
   
  - React + Tailwind. Single artifact suitable for v0/Lovable/Bolt-style  
  preview.        
  - Framer Motion for transitions where it matters (hero entrance, pull   
  quote, portal breathing). Don't animate everything.                     
  - The portal element is a clearly isolated component with <div        
  id="portal-mount" /> inside, styled but empty — leave a clean seam for  
  the Anam SDK to mount later.
  - "Talk to Zek'thar" and "Open a portal" buttons are stubs — wire them  
  to a no-op handler with a visible state change.                         
  - Mobile: the portal stays the hero. Layout collapses cleanly. Don't  
  sacrifice presence on small screens.                                    
                  
  Done means                                                              
                  
  A page that, on first scroll, makes someone feel they've stepped into a 
  different kind of internet — a still, warm, intelligent dark with one
  luminous presence inside it. They believe the avatar in the portal is   
  waiting for them. They believe the persistence claim because the page
  itself feels like it has interiority. They click "Open a portal" not  
  because they were sold to, but because they're curious about who's
  looking back.

  If the page screams, it failed. If it whispers and you lean in, it      
  worked.