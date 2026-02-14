
import React from 'react';

const projects = [
  {
    title: 'Exklusiv Trivselhus-villa',
    location: 'Storstockholm',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2000&auto=format&fit=crop',
    description: 'Nyproduktion av en storslagen villa i två plan. Modern arkitektur från Trivselhus med tidlösa trädetaljer och stilren finish för den privata barnfamiljen.',
    tag: 'Trivselhus'
  },
  {
    title: 'Skärgårdsvilla med terrass',
    location: 'Nacka / Saltsjö-Boo',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop',
    description: 'En gråmålad skönhet i kvällsljus. Stor balkong och altankonstruktion anpassad efter tomtens naturliga förutsättningar, komplett med integrerad belysning.',
    tag: 'Totalentreprenad'
  }
];

const ProjectGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {projects.map((project, idx) => (
        <div key={idx} className="group relative overflow-hidden bg-white hover-lift rounded-sm shadow-sm">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 md:p-12 flex flex-col justify-center items-center text-center">
            <span className="text-[#CA8A04] font-bold text-xs tracking-widest uppercase mb-4 border-b border-[#CA8A04] pb-1">
              {project.tag}
            </span>
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              {project.title}
            </h3>
            <p className="text-white/80 text-sm font-light leading-relaxed max-w-sm mb-6">
              {project.description}
            </p>
            <div className="flex items-center gap-2 text-[#CA8A04] text-xs font-bold tracking-widest uppercase">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {project.location}
            </div>
          </div>

          <div className="p-8 bg-white group-hover:translate-y-full transition-transform duration-500 absolute bottom-0 left-0 right-0 border-t border-[#1C1917]/5">
             <div className="flex justify-between items-center">
                <div>
                   <span className="text-[#78716C] text-xs uppercase tracking-[0.2em] font-medium">{project.location}</span>
                   <h3 className="text-2xl font-heading font-bold text-[#1C1917] mt-1">{project.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#1C1917]/10 flex items-center justify-center group-hover:bg-[#CA8A04] group-hover:border-[#CA8A04] transition-all duration-300">
                   <svg className="w-5 h-5 text-[#1C1917] group-hover:text-white transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </div>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
