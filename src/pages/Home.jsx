// // // import { useNavigate } from 'react-router-dom';
// // // import { useAuth } from '../hooks/useAuth';
// // // import Button from '../components/ui/Button';

// // // export default function Home() {
// // //   const navigate = useNavigate();
// // //   const { user } = useAuth();

// // //   return (
// // //     <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

// // //       <nav style={{
// // //         display: 'flex', justifyContent: 'space-between', alignItems: 'center',
// // //         padding: '20px 48px', background: 'var(--surface)',
// // //         borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 50,
// // //       }}>
// // //         <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.5px' }}>
// // //           ⚡ ResumeAI
// // //         </span>
// // //         <div style={{ display: 'flex', gap: '12px' }}>
// // //           {user ? (
// // //             <Button onClick={() => navigate('/dashboard')}>Go to Dashboard →</Button>
// // //           ) : (
// // //             <>
// // //               <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
// // //               <Button onClick={() => navigate('/signup')}>Get Started Free</Button>
// // //             </>
// // //           )}
// // //         </div>
// // //       </nav>

// // //       <div style={{ textAlign: 'center', padding: '100px 24px 80px', maxWidth: '720px', margin: '0 auto' }}>
// // //         <div style={{
// // //           display: 'inline-flex', alignItems: 'center', gap: '8px',
// // //           background: 'var(--primary-light)', color: 'var(--primary-dark)',
// // //           padding: '8px 18px', borderRadius: '999px', fontSize: '13px',
// // //           fontWeight: 600, marginBottom: '28px', border: '1px solid #c7d2fe',
// // //         }}>
// // //           🚀 Powered by OpenAI GPT-4o-mini
// // //         </div>

// // //         <h1 style={{
// // //           fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800,
// // //           color: 'var(--text-primary)', lineHeight: 1.15,
// // //           marginBottom: '24px', letterSpacing: '-1px',
// // //         }}>
// // //           Get Your Resume <br />
// // //           <span style={{
// // //             background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
// // //             WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
// // //           }}>
// // //             AI Reviewed
// // //           </span>{' '}in Seconds
// // //         </h1>

// // //         <p style={{
// // //           fontSize: '18px', color: 'var(--text-secondary)',
// // //           maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.7,
// // //         }}>
// // //           Upload your resume, enter your target job role, and get instant AI feedback — score, missing skills, and actionable suggestions.
// // //         </p>

// // //         <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
// // //           <Button size="lg" onClick={() => navigate(user ? '/upload' : '/signup')}>
// // //             Analyze My Resume →
// // //           </Button>
// // //           <Button size="lg" variant="secondary" onClick={() => navigate('/login')}>
// // //             Login to Dashboard
// // //           </Button>
// // //         </div>
// // //       </div>

// // //       <div style={{
// // //         display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
// // //         gap: '24px', maxWidth: '900px', margin: '0 auto', padding: '0 24px 100px',
// // //       }}>
// // //         {[
// // //           { icon: '🎯', title: 'Resume Score', desc: 'Get an overall score out of 100 with detailed breakdown', color: '#eef2ff' },
// // //           { icon: '🤖', title: 'ATS Compatible', desc: 'Know if your resume passes Applicant Tracking Systems', color: '#f0fdf4' },
// // //           { icon: '💡', title: 'Missing Skills', desc: 'See exactly what skills recruiters are looking for', color: '#fffbeb' },
// // //           { icon: '📈', title: 'Smart Tips', desc: 'Get specific, actionable suggestions to improve', color: '#fdf2f8' },
// // //         ].map(f => (
// // //           <div key={f.title} style={{
// // //             background: f.color, borderRadius: 'var(--radius-lg)',
// // //             padding: '28px 24px', border: '1px solid var(--border)',
// // //             transition: 'transform var(--transition)',
// // //           }}
// // //             onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
// // //             onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
// // //           >
// // //             <div style={{ fontSize: '32px', marginBottom: '14px' }}>{f.icon}</div>
// // //             <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{f.title}</h3>
// // //             <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
// // //           </div>
// // //         ))}
// // //       </div>

// // //     </div>
// // //   );
// // // }

// // import { useNavigate } from 'react-router-dom';
// // import { useAuth } from '../hooks/useAuth';
// // import Button from '../components/ui/Button';

// // export default function Home() {
// //   const navigate = useNavigate();
// //   const { user } = useAuth();

// //   return (
// //     <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

// //       {/* 🎥 Background Video */}
// //       <video
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //         style={{
// //           position: 'absolute',
// //           top: 0,
// //           left: 0,
// //           width: '100%',
// //           height: '100%',
// //           objectFit: 'cover',
// //           zIndex: 0
// //         }}
// //       >
// //         <source src="/bg.mp4" type="video/mp4" />
// //       </video>

// //       {/* 🔳 Dark Overlay */}
// //       <div style={{
// //         position: 'absolute',
// //         top: 0,
// //         left: 0,
// //         width: '100%',
// //         height: '100%',
// //         background: 'rgba(0,0,0,0.5)',
// //         zIndex: 1
// //       }}></div>

// //       {/* 🔝 NAVBAR */}
// //       <nav style={{
// //         display: 'flex',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //         padding: '20px 48px',
// //         background: 'rgba(0,0,0,0.3)',
// //         backdropFilter: 'blur(8px)',
// //         borderBottom: '1px solid rgba(255,255,255,0.1)',
// //         position: 'sticky',
// //         top: 0,
// //         zIndex: 10,
// //       }}>
// //         <span style={{
// //           fontSize: '20px',
// //           fontWeight: 800,
// //           color: '#fff',
// //           letterSpacing: '-0.5px'
// //         }}>
// //           ⚡ ResumeAI
// //         </span>

// //         <div style={{ display: 'flex', gap: '12px' }}>
// //           {user ? (
// //             <Button onClick={() => navigate('/dashboard')}>Go to Dashboard →</Button>
// //           ) : (
// //             <>
// //               <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
// //               <Button onClick={() => navigate('/signup')}>Get Started Free</Button>
// //             </>
// //           )}
// //         </div>
// //       </nav>

// //       {/* 🧠 MAIN CONTENT */}
// //       <div style={{
// //         textAlign: 'center',
// //         padding: '100px 24px 80px',
// //         maxWidth: '720px',
// //         margin: '0 auto',
// //         position: 'relative',
// //         zIndex: 10,
// //         color: 'white'
// //       }}>

// //         <div style={{
// //           display: 'inline-flex',
// //           alignItems: 'center',
// //           gap: '8px',
// //           background: 'rgba(255,255,255,0.1)',
// //           color: '#fff',
// //           padding: '8px 18px',
// //           borderRadius: '999px',
// //           fontSize: '13px',
// //           fontWeight: 600,
// //           marginBottom: '28px',
// //           border: '1px solid rgba(255,255,255,0.2)',
// //           backdropFilter: 'blur(6px)'
// //         }}>
// //           🚀 Powered by OpenAI GPT-4o-mini
// //         </div>

// //         <h1 style={{
// //           fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
// //           fontWeight: 800,
// //           color: '#fff',
// //           lineHeight: 1.15,
// //           marginBottom: '24px',
// //           letterSpacing: '-1px',
// //         }}>
// //           Get Your Resume <br />
// //           <span style={{
// //             background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
// //             WebkitBackgroundClip: 'text',
// //             WebkitTextFillColor: 'transparent',
// //           }}>
// //             AI Reviewed
// //           </span>{' '}in Seconds
// //         </h1>

// //         <p style={{
// //           fontSize: '18px',
// //           color: 'rgba(255,255,255,0.85)',
// //           maxWidth: '520px',
// //           margin: '0 auto 40px',
// //           lineHeight: 1.7,
// //         }}>
// //           Upload your resume, enter your target job role, and get instant AI feedback — score, missing skills, and actionable suggestions.
// //         </p>

// //         <div style={{
// //           display: 'flex',
// //           gap: '16px',
// //           justifyContent: 'center',
// //           flexWrap: 'wrap'
// //         }}>
// //           <Button size="lg" onClick={() => navigate(user ? '/upload' : '/signup')}>
// //             Analyze My Resume →
// //           </Button>

// //           <Button size="lg" variant="secondary" onClick={() => navigate('/login')}>
// //             Login to Dashboard
// //           </Button>
// //         </div>
// //       </div>

// //       {/* 📊 FEATURES */}
// //       <div style={{
// //         display: 'grid',
// //         gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
// //         gap: '24px',
// //         maxWidth: '900px',
// //         margin: '0 auto',
// //         padding: '0 24px 100px',
// //         position: 'relative',
// //         zIndex: 10,
// //       }}>
// //         {[
// //           { icon: '🎯', title: 'Resume Score', desc: 'Get an overall score out of 100 with detailed breakdown', color: 'rgba(255,255,255,0.1)' },
// //           { icon: '🤖', title: 'ATS Compatible', desc: 'Know if your resume passes Applicant Tracking Systems', color: 'rgba(255,255,255,0.1)' },
// //           { icon: '💡', title: 'Missing Skills', desc: 'See exactly what skills recruiters are looking for', color: 'rgba(255,255,255,0.1)' },
// //           { icon: '📈', title: 'Smart Tips', desc: 'Get specific, actionable suggestions to improve', color: 'rgba(255,255,255,0.1)' },
// //         ].map(f => (
// //           <div key={f.title} style={{
// //             background: f.color,
// //             borderRadius: '16px',
// //             padding: '28px 24px',
// //             border: '1px solid rgba(255,255,255,0.15)',
// //             backdropFilter: 'blur(10px)',
// //             transition: 'transform 0.3s',
// //           }}
// //             onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
// //             onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
// //           >
// //             <div style={{ fontSize: '32px', marginBottom: '14px' }}>{f.icon}</div>
// //             <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>{f.title}</h3>
// //             <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{f.desc}</p>
// //           </div>
// //         ))}
// //       </div>

// //     </div>
// //   );
// // }

// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import Button from '../components/ui/Button';

// export default function Home() {
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   return (
//     <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

//       {/* 🔝 NAVBAR */}
//       <nav style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '6px 48px',
//         background: 'var(--surface)',
//         borderBottom: '1px solid var(--border)',
//         position: 'sticky',
//         top: 0,
//         zIndex: 0,
//       }}>
//         <span style={{
//           fontSize: '19px',
//           fontWeight: 900,
//           color: 'var(--primary)',
//           letterSpacing: '-0.5px'
//         }}>
//           ⚡ HireLens
//         </span>

//         <div style={{ display: 'flex', gap: '12px' }}>
//           {user ? (
//             <Button onClick={() => navigate('/dashboard')}>
//               Go to Dashboard →
//             </Button>
//           ) : (
//             <>
//               <Button variant="ghost" onClick={() => navigate('/login')}>
//                 Login
//               </Button>
//               <Button onClick={() => navigate('/signup')}>
//                 Get Started Free
//               </Button>
//             </>
//           )}
//         </div>
//       </nav>

//       {/* HERO SECTION (VIDEO ONLY HERE) */}
//       <div style={{
//   position: 'relative',
//   width: '100vw',  
//   marginLeft: 'calc(-50vw + 50%)', // 🔥 center fix (no side gap)
//   padding: '120px 24px',
//   overflow: 'hidden'
// }}>

//   {/* VIDEO */}
//   <video
//     autoPlay
//     loop
//     muted
//     playsInline
//     style={{
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//       zIndex: 1
//     }}
//   >
//     <source src="/bg.mp4" type="video/mp4" />
//   </video>

//   {/* 🔳 OVERLAY */}
//   <div style={{
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'rgba(0,0,0,0.6)',
//     zIndex: 1
//   }} />

//   {/* CENTER CONTENT */}
//   <div style={{
//     position: 'relative',
//     zIndex: 10,
//     maxWidth: '720px',
//     margin: '0 auto',
//     textAlign: 'center',
//     color: 'white'
//   }}>

//           <div style={{
//             display: 'inline-flex',
//             alignItems: 'center',
//             gap: '8px',
//             background: 'rgba(255,255,255,0.1)',
//             padding: '8px 18px',
//             borderRadius: '999px',
//             fontSize: '13px',
//             fontWeight: 600,
//             marginBottom: '28px',
//             border: '1px solid rgba(255,255,255,0.2)'
//           }}>
//             🚀 AI Powered by Google Gemini
//           </div>

//           <h1 style={{
//             fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
//             fontWeight: 800,
//             lineHeight: 1.15,
//             marginBottom: '24px',
//             letterSpacing: '-1px',
//           }}>
//             Get Your Resume <br />
//             <span style={{
//               background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }}>
//               AI Reviewed
//             </span>{' '}in Seconds
//           </h1>

//           <p style={{
//             fontSize: '18px',
//             color: 'rgba(255,255,255,0.85)',
//             maxWidth: '520px',
//             margin: '0 auto 40px',
//             lineHeight: 1.7,
//           }}>
//             Upload your resume, enter your target job role, and get instant AI feedback — score, missing skills, and actionable suggestions.
//           </p>

//           <div style={{
//             display: 'flex',
//             gap: '16px',
//             justifyContent: 'center',
//             flexWrap: 'wrap'
//           }}>
//             <Button size="lg" onClick={() => navigate(user ? '/upload' : '/signup')}>
//               Analyze My Resume →
//             </Button>

//             <Button size="lg" variant="secondary" onClick={() => navigate('/login')}>
//               Login to Dashboard
//             </Button>
//           </div>

//         </div>
//       </div>

//       {/* 📊 FEATURES SECTION */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
//         gap: '24px',
//         maxWidth: '900px',
//         margin: '0 auto',
//         padding: '0 24px 100px',
//       }}>
//         {[
//           { icon: '🎯', title: 'Resume Score', desc: 'Get an overall score out of 100 with detailed breakdown', color: '#eef2ff' },
//           { icon: '🤖', title: 'ATS Compatible', desc: 'Know if your resume passes Applicant Tracking Systems', color: '#f0fdf4' },
//           { icon: '💡', title: 'Missing Skills', desc: 'See exactly what skills recruiters are looking for', color: '#fffbeb' },
//           { icon: '📈', title: 'Smart Tips', desc: 'Get specific, actionable suggestions to improve', color: '#fdf2f8' },
//         ].map(f => (
//           <div key={f.title} style={{
//             background: f.color,
//             borderRadius: '16px',
//             padding: '28px 24px',
//             border: '1px solid var(--border)',
//             transition: 'transform 0.3s',
//           }}
//             onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
//             onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
//           >
//             <div style={{ fontSize: '32px', marginBottom: '14px' }}>{f.icon}</div>
//             <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{f.title}</h3>
//             <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import Button from '../components/ui/Button';

// export default function Home() {
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   const features = [
//     { icon: '🎯', title: 'Resume Score', desc: 'Get an overall score out of 100 with detailed breakdown' },
//     { icon: '🤖', title: 'ATS Compatible', desc: 'Know if your resume passes Applicant Tracking Systems' },
//     { icon: '💡', title: 'Missing Skills', desc: 'See exactly what skills recruiters are looking for' },
//     { icon: '📈', title: 'Smart Suggestions', desc: 'Get specific, actionable advice to improve your resume' },
//     { icon: '⚡', title: 'Instant Analysis', desc: 'Get results in seconds powered by Google Gemini AI' },
//     { icon: '🔒', title: '100% Private', desc: 'Your resume is never stored — analyzed and forgotten' },
//   ];

//   return (
//     <div style={{ minHeight: '100vh', background: '#0a0a0f', overflowX: 'hidden' }}>

//       {/* FULL PAGE VIDEO BACKGROUND */}
//       <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
//         <video
//           autoPlay loop muted playsInline
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         >
//           <source src="/bg.mp4" type="video/mp4" />
//         </video>
//         <div style={{
//           position: 'absolute', inset: 0,
//           background: 'rgba(0,0,0,0.55)',
//         }} />
//       </div>

//       {/* EVERYTHING ON TOP OF VIDEO */}
//       <div style={{ position: 'relative', zIndex: 10 }}>

//         {/* NAVBAR — glass effect, video visible through it */}
//         <nav style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           padding: '0 48px',
//           height: '64px',
//           background: 'rgba(255,255,255,0.05)',
//           backdropFilter: 'blur(12px)',
//           WebkitBackdropFilter: 'blur(12px)',
//           borderBottom: '1px solid rgba(255,255,255,0.1)',
//           position: 'sticky',
//           top: 0,
//           zIndex: 50,
//         }}>
//           <span style={{
//             fontSize: '20px', fontWeight: 900,
//             color: '#fff', letterSpacing: '-0.5px',
//           }}>
//             ⚡ HireLens
//           </span>

//           <div style={{ display: 'flex', gap: '12px' }}>
//             {user ? (
//               <button
//                 onClick={() => navigate('/dashboard')}
//                 style={{
//                   background: 'rgba(255,255,255,0.15)',
//                   backdropFilter: 'blur(8px)',
//                   border: '1px solid rgba(255,255,255,0.3)',
//                   color: '#fff', padding: '8px 20px',
//                   borderRadius: '8px', fontWeight: 600,
//                   fontSize: '14px', cursor: 'pointer',
//                   transition: 'all 0.2s',
//                 }}
//                 onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
//                 onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
//               >
//                 Go to Dashboard →
//               </button>
//             ) : (
//               <>
//                 <button
//                   onClick={() => navigate('/login')}
//                   style={{
//                     background: 'transparent',
//                     border: '1px solid rgba(255,255,255,0.3)',
//                     color: '#fff', padding: '8px 20px',
//                     borderRadius: '8px', fontWeight: 500,
//                     fontSize: '14px', cursor: 'pointer',
//                     transition: 'all 0.2s',
//                   }}
//                   onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
//                   onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={() => navigate('/signup')}
//                   style={{
//                     background: 'rgba(99,102,241,0.85)',
//                     backdropFilter: 'blur(8px)',
//                     border: '1px solid rgba(99,102,241,0.6)',
//                     color: '#fff', padding: '8px 20px',
//                     borderRadius: '8px', fontWeight: 600,
//                     fontSize: '14px', cursor: 'pointer',
//                     transition: 'all 0.2s',
//                   }}
//                   onMouseEnter={e => e.currentTarget.style.background = 'rgba(99,102,241,1)'}
//                   onMouseLeave={e => e.currentTarget.style.background = 'rgba(99,102,241,0.85)'}
//                 >
//                   Get Started Free
//                 </button>
//               </>
//             )}
//           </div>
//         </nav>

//         {/* HERO SECTION */}
//         <div style={{
//           minHeight: '90vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           textAlign: 'center',
//           padding: '80px 24px',
//         }}>
//           <div style={{ maxWidth: '720px' }}>
//             <div style={{
//               display: 'inline-flex', alignItems: 'center', gap: '8px',
//               background: 'rgba(255,255,255,0.1)',
//               backdropFilter: 'blur(8px)',
//               padding: '8px 18px', borderRadius: '999px',
//               fontSize: '13px', fontWeight: 600,
//               marginBottom: '28px',
//               border: '1px solid rgba(255,255,255,0.2)',
//               color: '#fff',
//             }}>
//               🚀 AI Powered by Google Gemini
//             </div>

//             <h1 style={{
//               fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
//               fontWeight: 800, lineHeight: 1.15,
//               marginBottom: '24px', letterSpacing: '-1px',
//               color: '#fff',
//             }}>
//               Get Your Resume <br />
//               <span style={{
//                 background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}>
//                 AI Reviewed
//               </span>{' '}in Seconds
//             </h1>

//             <p style={{
//               fontSize: '18px',
//               color: 'rgba(255,255,255,0.8)',
//               maxWidth: '520px',
//               margin: '0 auto 40px',
//               lineHeight: 1.7,
//             }}>
//               Upload your resume, enter your target job role, and get instant AI feedback — score, missing skills, and actionable suggestions.
//             </p>

//             <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
//               <button
//                 onClick={() => navigate(user ? '/upload' : '/signup')}
//                 style={{
//                   background: 'rgba(99,102,241,0.9)',
//                   backdropFilter: 'blur(8px)',
//                   border: '1px solid rgba(99,102,241,0.5)',
//                   color: '#fff', padding: '14px 32px',
//                   borderRadius: '12px', fontWeight: 700,
//                   fontSize: '16px', cursor: 'pointer',
//                   transition: 'all 0.2s',
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.background = 'rgba(99,102,241,1)';
//                   e.currentTarget.style.transform = 'translateY(-2px)';
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.background = 'rgba(99,102,241,0.9)';
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//               >
//                 Analyze My Resume →
//               </button>

//               <button
//                 onClick={() => navigate('/login')}
//                 style={{
//                   background: 'rgba(255,255,255,0.1)',
//                   backdropFilter: 'blur(8px)',
//                   border: '1px solid rgba(255,255,255,0.3)',
//                   color: '#fff', padding: '14px 32px',
//                   borderRadius: '12px', fontWeight: 600,
//                   fontSize: '16px', cursor: 'pointer',
//                   transition: 'all 0.2s',
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
//                   e.currentTarget.style.transform = 'translateY(-2px)';
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//               >
//                 Login to Dashboard
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 6 FEATURE CARDS — glass effect */}
//         <div style={{
//           maxWidth: '960px',
//           margin: '0 auto',
//           padding: '0 24px 100px',
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
//           gap: '20px',
//         }}>
//           {features.map(f => (
//             <div
//               key={f.title}
//               style={{
//                 background: 'rgba(255,255,255,0.07)',
//                 backdropFilter: 'blur(16px)',
//                 WebkitBackdropFilter: 'blur(16px)',
//                 border: '1px solid rgba(255,255,255,0.12)',
//                 borderRadius: '16px',
//                 padding: '28px 24px',
//                 color: '#fff',
//                 transition: 'all 0.3s ease',
//                 cursor: 'default',
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.background = 'rgba(255,255,255,0.13)';
//                 e.currentTarget.style.border = '1px solid rgba(255,255,255,0.25)';
//                 e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
//                 e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
//                 e.currentTarget.style.border = '1px solid rgba(255,255,255,0.12)';
//                 e.currentTarget.style.transform = 'translateY(0) scale(1)';
//                 e.currentTarget.style.boxShadow = 'none';
//               }}
//             >
//               <div style={{ fontSize: '32px', marginBottom: '14px' }}>{f.icon}</div>
//               <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>
//                 {f.title}
//               </h3>
//               <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
//                 {f.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Footer from '../components/layout/Footer';

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const features = [
    { icon: '🎯', title: 'Resume Score', desc: 'Get an overall score out of 100 with detailed breakdown', grad: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
    { icon: '🤖', title: 'ATS Compatible', desc: 'Know if your resume passes Applicant Tracking Systems', grad: 'linear-gradient(135deg, #06b6d4, #0ea5e9)' },
    { icon: '💡', title: 'Missing Skills', desc: 'See exactly what skills recruiters are looking for', grad: 'linear-gradient(135deg, #f59e0b, #f97316)' },
    { icon: '📈', title: 'Smart Suggestions', desc: 'Get specific, actionable advice to improve your resume', grad: 'linear-gradient(135deg, #22c55e, #10b981)' },
    { icon: '⚡', title: 'Instant Analysis', desc: 'Get results in seconds powered by Google Gemini AI', grad: 'linear-gradient(135deg, #ec4899, #f43f5e)' },
    { icon: '🔒', title: '100% Private', desc: 'Your resume is never stored — analyzed and forgotten', grad: 'linear-gradient(135deg, #64748b, #475569)' },
  ];

  const year = new Date().getFullYear();

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', margin: 0, padding: 0 }}>

      {/* VIDEO HERO SECTION */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
      }}>
        <video
          autoPlay loop muted playsInline
          style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', zIndex: 0,
          }}
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85))', zIndex: 1,
        }} />

        {/* NAVBAR */}
        <nav style={{
          position: 'relative', zIndex: 10,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '0 48px', height: '64px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          <span style={{ fontSize: '20px', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px' }}>
            ⚡ HireLens
          </span>
          <div style={{ display: 'flex', gap: '12px' }}>
            {user ? (
              <button onClick={() => navigate('/dashboard')} style={{
                background: '#6366f1', border: 'none', color: '#fff',
                padding: '9px 22px', borderRadius: '8px', fontWeight: 600,
                fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#4f46e5'}
                onMouseLeave={e => e.currentTarget.style.background = '#6366f1'}
              >
                Go to Dashboard →
              </button>
            ) : (
              <>
                <button onClick={() => navigate('/login')} style={{
                  background: 'transparent', border: '1.5px solid rgba(255,255,255,0.4)',
                  color: '#fff', padding: '9px 22px', borderRadius: '8px',
                  fontWeight: 500, fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
                >
                  Login
                </button>
                <button onClick={() => navigate('/signup')} style={{
                  background: '#6366f1', border: 'none', color: '#fff',
                  padding: '9px 22px', borderRadius: '8px', fontWeight: 600,
                  fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#4f46e5'}
                  onMouseLeave={e => e.currentTarget.style.background = '#6366f1'}
                >
                  Get Started Free
                </button>
              </>
            )}
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: 'calc(100vh - 64px)',
          textAlign: 'center', padding: '60px 24px',
        }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(99,102,241,0.3)', padding: '8px 18px',
              borderRadius: '999px', fontSize: '13px', fontWeight: 600,
              marginBottom: '28px', border: '1px solid rgba(99,102,241,0.5)',
              color: '#c7d2fe',
            }}>
              🚀 AI Powered by Google Gemini
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800,
              lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-1px', color: '#fff',
            }}>
              Get Your Resume <br />
              <span style={{
                background: 'linear-gradient(135deg, #818cf8, #06b6d4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                AI Reviewed
              </span>{' '}in Seconds
            </h1>

            <p style={{
              fontSize: '18px', color: 'rgba(255,255,255,0.78)',
              maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.7,
            }}>
            Get instant AI feedback, score, and improvement tips in seconds.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate(user ? '/upload' : '/signup')}
                style={{
                  background: '#6366f1', border: '2px solid #818cf8',
                  color: '#fff', padding: '14px 36px', borderRadius: '12px',
                  fontWeight: 700, fontSize: '16px', cursor: 'pointer',
                  transition: 'all 0.2s', boxShadow: '0 0 24px rgba(99,102,241,0.5)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#4f46e5';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 36px rgba(99,102,241,0.7)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#6366f1';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.5)';
                }}
              >
                🚀 Analyze Resume Instantly
              </button>

              <button
                onClick={() => navigate('/login')}
                style={{
                  background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)',
                  color: '#fff', padding: '14px 36px', borderRadius: '12px',
                  fontWeight: 600, fontSize: '16px', cursor: 'pointer', transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Login to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div style={{ background: '#f8fafc', width: '100%', padding: '80px 24px 100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <h2 style={{
            fontSize: '2rem', fontWeight: 800, color: '#0f172a',
            marginBottom: '12px', letterSpacing: '-0.5px',
          }}>
            Everything you need to land the job
          </h2>
          <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '480px', margin: '0 auto' }}>
            Powerful AI tools to make your resume stand out from the crowd
          </p>
        </div>

        <div style={{
          maxWidth: '960px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {features.map(f => (
            <div key={f.title} style={{
              background: '#ffffff', borderRadius: '20px', padding: '32px 28px',
              border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease', cursor: 'default',
              position: 'relative', overflow: 'hidden',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.querySelector('.card-top').style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.querySelector('.card-top').style.opacity = '0';
              }}
            >
              <div className="card-top" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                background: f.grad, opacity: 0, transition: 'opacity 0.3s ease',
                borderRadius: '20px 20px 0 0',
              }} />
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: f.grad, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '24px', marginBottom: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER — directly inside Home, full width */}
      <footer style={{
        background: '#0f172a',
        color: '#fff',
        padding: '60px 48px 32px',
        width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '960px',
          margin: '0 auto 48px',
        }}>
          {/* BRAND */}
          <div>
            <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '12px', letterSpacing: '-0.5px' }}>
              ⚡ HireLens
            </div>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '220px' }}>
              AI-powered resume analysis to help you land your dream job faster.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '20px', flexWrap: 'wrap' }}>
              {['React 18', 'Vite', 'Gemini AI'].map(tag => (
                <span key={tag} style={{
                  fontSize: '11px', fontWeight: 600, padding: '4px 10px',
                  borderRadius: '999px', background: 'rgba(99,102,241,0.2)',
                  border: '1px solid rgba(99,102,241,0.4)', color: '#a5b4fc',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 style={{
              fontSize: '13px', fontWeight: 700, color: '#fff',
              marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px',
            }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'Analyze Resume', path: '/upload' },
                { label: 'Dashboard', path: '/dashboard' },
                { label: 'History', path: '/history' },
                { label: 'Settings', path: '/settings' },
              ].map(link => (
                <li key={link.label}>
                  <span onClick={() => navigate(link.path)} style={{
                    fontSize: '14px', color: '#94a3b8',
                    cursor: 'pointer', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#a5b4fc'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* FEATURES */}
          <div>
            <h4 style={{
              fontSize: '13px', fontWeight: 700, color: '#fff',
              marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px',
            }}>
              Features
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['🎯 Resume Scoring', '🤖 ATS Checker', '💡 Skill Gap Analysis', '📈 Smart Suggestions', '🔒 100% Private'].map(f => (
                <li key={f} style={{ fontSize: '14px', color: '#94a3b8' }}>{f}</li>
              ))}
            </ul>
          </div>

          {/* CTA BOX */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.15))',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '16px', padding: '24px',
            display: 'flex', flexDirection: 'column', gap: '12px',
          }}>
            <div style={{ fontSize: '20px' }}>🚀</div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>Ready to get hired?</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
              Analyze your resume now and get instant AI feedback for free.
            </p>
            <button onClick={() => navigate('/upload')} style={{
              background: '#6366f1', border: 'none', color: '#fff',
              padding: '10px 20px', borderRadius: '8px', fontWeight: 600,
              fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s', marginTop: '4px',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#4f46e5';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#6366f1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              🚀 Analyze Resume Instantly
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div style={{
          maxWidth: '960px', margin: '0 auto',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontSize: '13px', color: '#475569' }}>
            © {year} HireLens — Designed & Developed by Manvi Raj
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Use', 'Contact'].map(item => (
              <span key={item} style={{
                fontSize: '13px', color: '#475569',
                cursor: 'pointer', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}