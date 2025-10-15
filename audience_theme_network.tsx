// import React, { useState } from 'react';
// import { Search, Info } from 'lucide-react';

// const NetworkDiagram = () => {
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [hoveredNode, setHoveredNode] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const audiences = [
//     { id: 'a1', name: 'Housing Advocates', themes: ['Affordability', 'Permits', 'Density/Sprawl'], x: 50, y: 100 },
//     { id: 'a2', name: 'Chamber of Commerce', themes: ['Affordability', 'Workforce', 'Business Climate', 'Regional Standing'], x: 50, y: 200 },
//     { id: 'a3', name: 'City and Developers', themes: ['Density/Sprawl', 'Regulatory Reform', 'Infill', 'Greenfield', 'Reinvestment'], x: 50, y: 300 },
//     { id: 'a4', name: 'City Officials', themes: ['Timelines', 'Permits', 'Spillover Effects', 'Regulatory Reform', 'Policy Evaluation'], x: 50, y: 400 },
//     { id: 'a5', name: 'EDC stakeholders', themes: ['Regional Standing', 'Benchmarking', 'Business Climate', 'Affordability', 'Workforce'], x: 50, y: 500 },
//     { id: 'a6', name: 'Local government', themes: ['Timelines', 'Workforce', 'Communications', 'Permits'], x: 50, y: 600 },
//     { id: 'a7', name: 'Goods Movement', themes: ['Industrial', 'Freight', 'Benchmarking', 'Incentives', 'Routing'], x: 50, y: 700 },
//     { id: 'a8', name: 'Housing overlap', themes: ['Permits', 'Affordability', 'Workforce', 'Policy Evaluation'], x: 50, y: 800 },
//     { id: 'a9', name: 'Climate linkage', themes: ['Climate/Energy', 'Infill', 'Greenfield', 'Embodied Impacts', 'Permits', 'Density/Sprawl'], x: 50, y: 900 },
//     { id: 'a10', name: 'Freight forum', themes: ['Freight', 'Industrial', 'Engagement'], x: 50, y: 1000 },
//     { id: 'a11', name: 'Programs/Grants', themes: ['Corridors', 'TOD', 'Incentives', 'Grants', 'Finance', 'Intermodal'], x: 50, y: 1100 }
//   ];

//   const themes = [
//     { id: 't1', name: 'Affordability', x: 450, y: 150, relatedThemes: ['Workforce', 'Permits', 'Density/Sprawl', 'Finance'] },
//     { id: 't2', name: 'Workforce', x: 600, y: 250, relatedThemes: ['Affordability', 'Timelines', 'Business Climate'] },
//     { id: 't3', name: 'Timelines', x: 400, y: 400, relatedThemes: ['Permits', 'Workforce', 'Communications'] },
//     { id: 't4', name: 'Permits', x: 500, y: 300, relatedThemes: ['Timelines', 'Affordability', 'Regulatory Reform', 'Policy Evaluation'] },
//     { id: 't5', name: 'Benchmarking', x: 650, y: 600, relatedThemes: ['Regional Standing', 'Business Climate', 'Industrial'] },
//     { id: 't6', name: 'Incentives', x: 550, y: 800, relatedThemes: ['Finance', 'Grants', 'TOD', 'Industrial'] },
//     { id: 't7', name: 'Climate/Energy', x: 350, y: 900, relatedThemes: ['Infill', 'Greenfield', 'Embodied Impacts', 'Density/Sprawl'] },
//     { id: 't8', name: 'Density/Sprawl', x: 450, y: 550, relatedThemes: ['Climate/Energy', 'Affordability', 'TOD', 'Infill'] },
//     { id: 't9', name: 'TOD', x: 600, y: 900, relatedThemes: ['Corridors', 'Density/Sprawl', 'Climate/Energy', 'Intermodal'] },
//     { id: 't10', name: 'Corridors', x: 700, y: 1000, relatedThemes: ['TOD', 'Intermodal', 'Freight'] },
//     { id: 't11', name: 'Finance', x: 650, y: 750, relatedThemes: ['Grants', 'Incentives', 'Affordability'] },
//     { id: 't12', name: 'Grants', x: 700, y: 850, relatedThemes: ['Finance', 'Incentives', 'TOD'] },
//     { id: 't13', name: 'Business Climate', x: 700, y: 350, relatedThemes: ['Regional Standing', 'Workforce', 'Benchmarking'] },
//     { id: 't14', name: 'Regional Standing', x: 550, y: 450, relatedThemes: ['Business Climate', 'Benchmarking'] },
//     { id: 't15', name: 'Communications', x: 350, y: 500, relatedThemes: ['Timelines', 'Engagement'] },
//     { id: 't16', name: 'Industrial', x: 500, y: 700, relatedThemes: ['Freight', 'Routing', 'Benchmarking', 'Incentives'] },
//     { id: 't17', name: 'Freight', x: 600, y: 750, relatedThemes: ['Industrial', 'Routing', 'Corridors'] },
//     { id: 't18', name: 'Routing', x: 650, y: 650, relatedThemes: ['Freight', 'Industrial'] },
//     { id: 't19', name: 'Infill', x: 350, y: 800, relatedThemes: ['Climate/Energy', 'Greenfield', 'Density/Sprawl', 'Reinvestment'] },
//     { id: 't20', name: 'Greenfield', x: 300, y: 700, relatedThemes: ['Climate/Energy', 'Infill', 'Density/Sprawl'] },
//     { id: 't21', name: 'Embodied Impacts', x: 250, y: 850, relatedThemes: ['Climate/Energy'] },
//     { id: 't22', name: 'Policy Evaluation', x: 400, y: 300, relatedThemes: ['Permits', 'Regulatory Reform'] },
//     { id: 't23', name: 'Spillover Effects', x: 300, y: 400, relatedThemes: ['Timelines', 'Permits'] },
//     { id: 't24', name: 'Regulatory Reform', x: 350, y: 350, relatedThemes: ['Permits', 'Policy Evaluation', 'Density/Sprawl'] },
//     { id: 't25', name: 'Intermodal', x: 700, y: 950, relatedThemes: ['TOD', 'Corridors', 'Freight'] },
//     { id: 't26', name: 'Reinvestment', x: 300, y: 600, relatedThemes: ['Infill', 'Density/Sprawl'] },
//     { id: 't27', name: 'Engagement', x: 450, y: 1000, relatedThemes: ['Communications'] }
//   ];

//   const getConnections = () => {
//     const connections = [];
//     audiences.forEach(aud => {
//       aud.themes.forEach(themeName => {
//         const theme = themes.find(t => t.name === themeName);
//         if (theme) {
//           connections.push({
//             from: aud,
//             to: theme,
//             type: 'audience-theme'
//           });
//         }
//       });
//     });
    
//     themes.forEach(theme => {
//       theme.relatedThemes?.forEach(relatedName => {
//         const relatedTheme = themes.find(t => t.name === relatedName);
//         if (relatedTheme) {
//           connections.push({
//             from: theme,
//             to: relatedTheme,
//             type: 'theme-theme'
//           });
//         }
//       });
//     });
    
//     return connections;
//   };

//   const connections = getConnections();

//   const isConnected = (node) => {
//     if (!selectedNode) return true;
//     if (node.id === selectedNode.id) return true;
    
//     return connections.some(conn => 
//       (conn.from.id === selectedNode.id && conn.to.id === node.id) ||
//       (conn.to.id === selectedNode.id && conn.from.id === node.id)
//     );
//   };

//   const filteredAudiences = audiences.filter(a => 
//     a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     a.themes.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   const filteredThemes = themes.filter(t => 
//     t.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const shouldShowConnection = (conn) => {
//     if (!selectedNode) return true;
//     return conn.from.id === selectedNode.id || conn.to.id === selectedNode.id;
//   };

//   return (
//     <div className="w-full h-screen bg-slate-50 flex flex-col">
//       <div className="bg-white border-b border-slate-200 p-4 shadow-sm">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-2xl font-bold text-slate-800 mb-2">Audience-Theme Network</h1>
//           <div className="flex items-center gap-4 mb-3">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-2.5 text-slate-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search audiences or themes..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <button
//               onClick={() => setSelectedNode(null)}
//               className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300"
//             >
//               Reset View
//             </button>
//           </div>
//           <div className="flex items-center gap-6 text-sm">
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 bg-blue-500 rounded"></div>
//               <span className="text-slate-600">Audiences</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 bg-yellow-400 rounded"></div>
//               <span className="text-slate-600">Themes</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-0.5 bg-blue-300"></div>
//               <span className="text-slate-600">Audience → Theme</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-0.5 bg-green-300"></div>
//               <span className="text-slate-600">Theme → Theme</span>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="flex-1 overflow-auto relative">
//         <svg width="900" height="1200" className="mx-auto">
//           {connections.map((conn, i) => {
//             if (!shouldShowConnection(conn)) return null;
//             const show = isConnected(conn.from) && isConnected(conn.to);
//             return (
//               <line
//                 key={i}
//                 x1={conn.from.x}
//                 y1={conn.from.y}
//                 x2={conn.to.x}
//                 y2={conn.to.y}
//                 stroke={conn.type === 'audience-theme' ? '#93c5fd' : '#86efac'}
//                 strokeWidth={show ? 2 : 0.5}
//                 opacity={show ? 0.6 : 0.2}
//               />
//             );
//           })}
          
//           {filteredAudiences.map(aud => (
//             <g key={aud.id}>
//               <rect
//                 x={aud.x - 80}
//                 y={aud.y - 15}
//                 width={160}
//                 height={30}
//                 rx={6}
//                 fill={isConnected(aud) ? '#3b82f6' : '#94a3b8'}
//                 opacity={isConnected(aud) ? 1 : 0.3}
//                 className="cursor-pointer transition-all"
//                 onClick={() => setSelectedNode(selectedNode?.id === aud.id ? null : aud)}
//                 onMouseEnter={() => setHoveredNode(aud)}
//                 onMouseLeave={() => setHoveredNode(null)}
//               />
//               <text
//                 x={aud.x}
//                 y={aud.y + 5}
//                 textAnchor="middle"
//                 fill="white"
//                 fontSize="12"
//                 fontWeight="600"
//                 className="pointer-events-none"
//               >
//                 {aud.name}
//               </text>
//             </g>
//           ))}
          
//           {filteredThemes.map(theme => (
//             <g key={theme.id}>
//               <circle
//                 cx={theme.x}
//                 cy={theme.y}
//                 r={45}
//                 fill={isConnected(theme) ? '#facc15' : '#cbd5e1'}
//                 opacity={isConnected(theme) ? 1 : 0.3}
//                 className="cursor-pointer transition-all"
//                 onClick={() => setSelectedNode(selectedNode?.id === theme.id ? null : theme)}
//                 onMouseEnter={() => setHoveredNode(theme)}
//                 onMouseLeave={() => setHoveredNode(null)}
//               />
//               <text
//                 x={theme.x}
//                 y={theme.y + 5}
//                 textAnchor="middle"
//                 fill="#1e293b"
//                 fontSize="11"
//                 fontWeight="600"
//                 className="pointer-events-none"
//               >
//                 {theme.name.split('/').map((part, i) => (
//                   <tspan key={i} x={theme.x} dy={i === 0 ? 0 : 14}>{part}</tspan>
//                 ))}
//               </text>
//             </g>
//           ))}
//         </svg>
//       </div>
      
//       {(selectedNode || hoveredNode) && (
//         <div className="bg-white border-t border-slate-200 p-4 shadow-lg">
//           <div className="max-w-6xl mx-auto">
//             <h3 className="font-bold text-lg text-slate-800 mb-2">
//               {(selectedNode || hoveredNode).name}
//             </h3>
//             {(selectedNode || hoveredNode).themes && (
//               <div>
//                 <p className="text-sm text-slate-600 mb-1">Connected Themes:</p>
//                 <div className="flex flex-wrap gap-2">
//                   {(selectedNode || hoveredNode).themes.map(t => (
//                     <span key={t} className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//             {(selectedNode || hoveredNode).relatedThemes && (
//               <div>
//                 <p className="text-sm text-slate-600 mb-1">Related Themes:</p>
//                 <div className="flex flex-wrap gap-2">
//                   {(selectedNode || hoveredNode).relatedThemes.map(t => (
//                     <span key={t} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//             <p className="text-xs text-slate-500 mt-2">
//               Click any node to highlight its connections, click again to deselect
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NetworkDiagram;
