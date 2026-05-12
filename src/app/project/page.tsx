'use client'

import { useState } from 'react'
import PROJECTS from '@/data/projects'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openGallery = (projectId: number) => {
    setSelectedProject(projectId)
    setCurrentImageIndex(0)
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeGallery = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => (prev + 1) % PROJECTS[selectedProject].images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => (prev - 1 + PROJECTS[selectedProject].images.length) % PROJECTS[selectedProject].images.length)
    }
  }

  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">My Project</h1>
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-4 sm:p-5"
              key={id}
            >
              <div 
                className="relative group cursor-pointer"
                onClick={() => openGallery(id)}
              >
                <AspectRatio
                  className="border-border dark:border-darkBorder shadow-light dark:shadow-dark !-bottom-[2px] rounded-base border-2 overflow-hidden"
                  ratio={72 / 33}
                >
                  <img
                    className="w-full h-full object-cover rounded-base transition-transform duration-500 group-hover:scale-105"
                    src={`${project.previewImage}`}
                    alt={project.name}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-base">
                    <div className="bg-white p-3 rounded-full shadow-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-6 h-6 text-black" />
                    </div>
                    {project.images.length > 1 && (
                      <span className="absolute bottom-4 right-4 bg-white text-black px-3 py-1 rounded-base text-xs font-bold border-2 border-black shadow-light">
                        {project.images.length} Photos
                      </span>
                    )}
                  </div>
                </AspectRatio>
              </div>

              <div className="text-text mt-5 font-base">
                <h2 className="text-xl font-heading sm:text-2xl">
                  {project.name}
                </h2>

                <p className="mt-2">{project.description}</p>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  <a
                    className="border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Visit
                  </a>
                  <a
                    className="border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Lightbox / Gallery Modal */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={closeGallery}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); closeGallery(); }}
            className="absolute top-6 right-6 z-50 p-2 bg-main rounded-full border-2 border-black shadow-light hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
             <div className="relative w-full max-h-[80vh] bg-main border-4 border-black rounded-base shadow-light overflow-hidden flex items-center justify-center">
                <img 
                  key={currentImageIndex}
                  src={PROJECTS[selectedProject].images[currentImageIndex]} 
                  alt={`${PROJECTS[selectedProject].name} - ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300"
                />
                
                {PROJECTS[selectedProject].images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full border-2 border-black shadow-light hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all hidden sm:block"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full border-2 border-black shadow-light hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all hidden sm:block"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
                
                <div className="absolute top-4 left-4 bg-white px-4 py-1 border-2 border-black rounded-base font-bold text-sm shadow-light">
                   {currentImageIndex + 1} / {PROJECTS[selectedProject].images.length}
                </div>
             </div>

             {/* Mobile Controls & Thumbnails */}
             <div className="mt-6 flex flex-col items-center gap-4 w-full">
                {PROJECTS[selectedProject].images.length > 1 && (
                  <div className="flex gap-4 sm:hidden">
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="p-2 bg-white rounded-full border-2 border-black shadow-light"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="p-2 bg-white rounded-full border-2 border-black shadow-light"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}

                <div className="flex gap-2 overflow-x-auto pb-2 max-w-full">
                   {PROJECTS[selectedProject].images.map((img, idx) => (
                     <button 
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-16 h-12 sm:w-20 sm:h-16 flex-shrink-0 border-2 border-black rounded-base overflow-hidden transition-all ${idx === currentImageIndex ? 'scale-110 shadow-light z-10' : 'opacity-50 hover:opacity-100'}`}
                     >
                        <img src={img} className="w-full h-full object-cover" />
                     </button>
                   ))}
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  )
}
