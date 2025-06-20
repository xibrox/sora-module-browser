'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type FileType = 'js' | 'json' | 'png' | 'jpg' | 'webp';

interface FileItem {
  name: string;
  type: FileType;
}

interface ProjectItem {
  name: string;
  files: FileItem[];
}

export default function FileExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'streams' | 'novels'>('all');

  const streamProjects: ProjectItem[] = [
    {
      name: 'animeztoon',
      files: [
        { name: 'animeztoon', type: 'js' },
        { name: 'animeztoon', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'aniwave',
      files: [
        { name: 'aniwave', type: 'js' },
        { name: 'aniwave', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'arabictoons',
      files: [
        { name: 'arabictoons', type: 'js' },
        { name: 'arabictoons', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'bingeflex',
      files: [
        { name: 'bingeflex', type: 'js' },
        { name: 'bingeflex', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'cinepulse',
      files: [
        { name: 'cinepulse', type: 'js' },
        { name: 'cinepulse', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'flickystream',
      files: [
        { name: 'flickystream', type: 'js' },
        { name: 'flickystream', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'franime',
      files: [
        { name: 'franime', type: 'js' },
        { name: 'franime', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'frembed',
      files: [
        { name: 'frembed', type: 'js' },
        { name: 'frembed', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'kdramahood',
      files: [
        { name: 'kdramahood', type: 'js' },
        { name: 'kdramahood', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'lycoriscafe',
      files: [
        { name: 'lycoriscafe', type: 'js' },
        { name: 'lycoriscafe', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'mokmobi',
      files: [
        { name: 'mokmobi', type: 'js' },
        { name: 'mokmobi', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'mzone',
      files: [
        { name: 'mzone', type: 'js' },
        { name: 'mzone', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'narucannon',
      files: [
        { name: 'narucannon', type: 'js' },
        { name: 'narucannon', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'net3lix',
      files: [
        { name: 'net3lix', type: 'js' },
        { name: 'net3lix', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'onepace',
      files: [
        { name: 'onepace', type: 'js' },
        { name: 'onepace', type: 'json' },
        { name: 'onepaceEs', type: 'js' },
        { name: 'onepaceEs', type: 'json' },
        { name: 'onepaceFr', type: 'js' },
        { name: 'onepaceFr', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'ramaorientalfansub',
      files: [
        { name: 'ramaorientalfansub', type: 'js' },
        { name: 'ramaorientalfansub', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'ristoanime',
      files: [
        { name: 'ristoanime', type: 'js' },
        { name: 'ristoanime', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'rive',
      files: [
        { name: 'rive', type: 'js' },
        { name: 'rive', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'streamcloud',
      files: [
        { name: 'streamcloud', type: 'js' },
        { name: 'streamcloud', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'sudatchi',
      files: [
        { name: 'sudatchi', type: 'js' },
        { name: 'sudatchi', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'toonanime',
      files: [
        { name: 'toonanime', type: 'js' },
        { name: 'toonanime', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'uaserial',
      files: [
        { name: 'uaserial', type: 'js' },
        { name: 'uaserial', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'vidapi',
      files: [
        { name: 'vidapi', type: 'js' },
        { name: 'vidapi', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'vixsrc',
      files: [
        { name: 'vixsrc', type: 'js' },
        { name: 'vixsrc', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'wtflix',
      files: [
        { name: 'wtflix', type: 'js' },
        { name: 'wtflix', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
    {
      name: 'yummy-anime',
      files: [
        { name: 'yummy-anime', type: 'js' },
        { name: 'yummy-anime', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
  ];

  const novelProjects: ProjectItem[] = [
    {
      name: 'novelfire',
      files: [
        { name: 'novelfire', type: 'js' },
        { name: 'novelfire', type: 'json' },
        { name: 'icon', type: 'png' },
      ]
    },
  ];

  // Filter projects based on search and active tab
  const filteredStreams = streamProjects.filter(project => 
    (activeTab === 'all' || activeTab === 'streams') && 
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNovels = novelProjects.filter(project => 
    (activeTab === 'all' || activeTab === 'novels') && 
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-light tracking-wide">IBRO Modules</h1>
              <p className="text-sm text-gray-500 mt-1">Browse module files</p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search modules..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-800">
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'all' ? 'text-white border-b border-white' : 'text-gray-500 hover:text-gray-300'}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'streams' ? 'text-white border-b border-white' : 'text-gray-500 hover:text-gray-300'}`}
              onClick={() => setActiveTab('streams')}
            >
              Streams
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'novels' ? 'text-white border-b border-white' : 'text-gray-500 hover:text-gray-300'}`}
              onClick={() => setActiveTab('novels')}
            >
              Novels
            </button>
          </div>
        </header>
        
        {/* Modules */}
        <div className="space-y-8">
          {(filteredStreams.length > 0 || filteredNovels.length > 0) ? (
            <>
              {filteredStreams.length > 0 && (
                <ProjectSection 
                  title="Stream Modules" 
                  projects={filteredStreams} 
                  basePath="/streams" 
                />
              )}
              
              {filteredNovels.length > 0 && (
                <ProjectSection 
                  title="Novel Modules" 
                  projects={filteredNovels} 
                  basePath="/novels" 
                />
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-400">No modules found</h3>
              <p className="text-sm text-gray-600 mt-1">
                Try adjusting your search or filter
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectSection({ title, projects, basePath }: { 
  title: string; 
  projects: ProjectItem[]; 
  basePath: string; 
}) {
  // Enhanced fallback handler for missing icons
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, projectName: string) => {
    const target = e.target as HTMLImageElement;
    
    // If we tried PNG and failed, try JPG
    if (target.src.endsWith('.png')) {
      target.src = `${basePath}/${projectName}/icon.jpg`;
      // FIX: Removed unused 'event' parameter
      target.onerror = () => {
        // If JPG also fails, show fallback
        const fallbackElement = target.nextElementSibling as HTMLElement;
        if (fallbackElement) {
          fallbackElement.style.display = 'block';
          target.style.display = 'none';
        }
      };
    } else {
      // If JPG fails too, show fallback
      const fallbackElement = target.nextElementSibling as HTMLElement;
      if (fallbackElement) {
        fallbackElement.style.display = 'block';
        target.style.display = 'none';
      }
    }
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-400 mb-4 flex items-center">
        <span className="h-px flex-1 bg-gray-800 mr-3"></span>
        {title}
        <span className="h-px flex-1 bg-gray-800 ml-3"></span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map(project => (
          <div key={project.name} className="bg-gray-800/50 border border-gray-800 rounded p-4 transition hover:bg-gray-800/70">
            <div className="flex items-start mb-3">
              {/* Project icon container with fallback */}
              <div className="w-12 h-12 rounded mr-3 overflow-hidden flex items-center justify-center bg-gray-700 border border-gray-600 relative">
                {/* Use next/image for optimized images */}
                <Image 
                  src={`${basePath}/${project.name}/icon.png`}
                  onError={(e) => handleImageError(e, project.name)}
                  alt={`${project.name} icon`}
                  className="w-full h-full object-cover"
                  width={48}
                  height={48}
                />
                {/* Fallback icon - shown only if image fails */}
                <svg 
                  className="h-5 w-5 text-gray-400 absolute" 
                  style={{ display: 'none' }}
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-200">{project.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{project.files.length} files</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.files.map(file => (
                <a 
                  key={`${project.name}-${file.name}-${file.type}`}
                  href={`${basePath}/${project.name}/${file.name}.${file.type}`}
                  className="text-xs bg-gray-900 border border-gray-800 rounded px-2.5 py-1.5 hover:bg-gray-800 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center">
                    {file.type === 'js' && (
                      <span className="text-yellow-400 mr-1.5">JS</span>
                    )}
                    {file.type === 'json' && (
                      <span className="text-blue-400 mr-1.5">JSON</span>
                    )}
                    {(file.type === 'png' || file.type === 'jpg' || file.type === 'webp') && (
                      <span className="text-purple-400 mr-1.5">IMG</span>
                    )}
                    {file.name}.{file.type}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}