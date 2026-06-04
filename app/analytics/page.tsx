"use client";
import { useState } from "react";
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import AddButton from '@/app/components/AddButton';
export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      
{/* TopAppBar (Mobile/Web Hybrid based on JSON context) */}
<header className="md:hidden flex fixed top-0 left-0 w-full z-40 justify-between items-center px-6 py-3 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-[0_4px_20px_rgba(224,64,160,0.1)]">
<button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-primary hover:bg-primary-container/20 active:scale-95 transition-all rounded-full mr-2"><span className="material-symbols-outlined text-3xl">menu</span></button>

<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl" style={{"fontVariationSettings": "'FILL' 1"}}>cake</span>
<span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic tracking-tight">Candy Cash</span>
</div>
<div className="flex items-center bg-surface-container-highest rounded-full px-4 py-2 w-64 border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
<input className="bg-transparent border-none outline-none text-on-surface w-full placeholder:text-on-surface-variant/70 focus:ring-0 p-0 text-sm" placeholder="Search insights..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-primary-container/20 hover:scale-105 active:scale-95 transition-all text-on-surface-variant hover:text-primary">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 rounded-full hover:bg-primary-container/20 hover:scale-105 active:scale-95 transition-all text-on-surface-variant hover:text-primary">
<span className="material-symbols-outlined">account_balance_wallet</span>
</button>
<div className="relative group flex-shrink-0">
    <button className="relative rounded-full overflow-hidden w-10 h-10 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-md block">
        <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1EihwFP8_o0a4_mlkfBpTLZVJ5ntnfE96wTRheAf8KdwxMPyuR24bdP8gOxgi4fyE46l9sCCKOF7QYlD7fDooxaSXUjeOf9VH1bWbYoCLWPZVsPmEqnBmC1JM43uF0mb5w6QypL-kfzSBdKziVbdbinbGozL_2pQYApk-1UONW25nA7rW2X11e9jGJrO5vEZPXrCXKSQaxyHOQTp2CMCqelK45pDFhyJWv-FoK5cF39noowUdNMTSHCgHRXBV5EW_DRoYUI4zBOM"/>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200">
            <span className="material-symbols-outlined text-white text-lg">edit</span>
        </div>
    </button>
    <div className="absolute top-full right-0 mt-3 w-48 bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_rgba(124,82,170,0.2)] border border-outline-variant/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible translate-y-[-10px] group-hover:translate-y-0 group-focus-within:translate-y-0 transition-all duration-300 ease-out z-50 flex flex-col overflow-hidden">
        <Link href="/settings" className="px-4 py-3 text-sm font-bold text-on-surface hover:bg-primary-container/20 hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">manage_accounts</span>
            Edit Profile
        </Link>
        <button className="px-4 py-3 text-sm font-bold text-error hover:bg-error-container/50 transition-colors flex items-center gap-2 text-left">
            <span className="material-symbols-outlined text-lg">logout</span>
            Sign Out
        </button>
    </div>
</div>
</div>
</header>
{/* SideNavBar (Web) */}
<Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
{/* Mobile Top Header (Fallback for when SideNav is hidden) */}
<div className="md:hidden flex justify-between items-center p-6 bg-surface border-b border-outline-variant sticky top-0 z-30">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-2xl" style={{"fontVariationSettings": "'FILL' 1"}}>auto_awesome</span>
<span className="text-xl font-black text-primary italic">Sweet Stats</span>
</div>
<img alt="User avatar" className="w-8 h-8 rounded-full border-2 border-primary object-cover" data-alt="A close-up portrait of a cheerful person with vibrant pink-streaked hair, smiling warmly. The lighting is soft and high-key, illuminating their face evenly against a bright, clean white background. They are wearing a pastel purple top. The overall mood is friendly, energetic, and perfectly matches a playful, saturated color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa3f1B9pfvAI0hLZ2menBocnZ5NehWMpq5lLTEXsr_LtqKRyXswKfMhr8qUw8SGOZ49QZ47_QzagQPUFh-EVOLHhWMEHIPv5xD_5Rnf6gdf5nXbodKjwbMin95a8sv4JA0DyV6N7ad4ZNkzhUI8OkHj_Ipa1rEF_WsXS_QTSU7u6p5Csm13GlQNT1QsS0d_LGNz1AJDF5jrMj1Aigox9P6nlBcwDI-TwBsZc1XkywbCf6cQegxOUOalszh_bx435-oxGA8ToXjLE4"/>
</div>
{/* Main Content Canvas */}


{/* Desktop Floating Avatar */}
<div className="hidden md:flex fixed top-6 right-8 z-40 items-center gap-4">
    <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-primary-container/20 transition-all duration-200 shadow-sm bg-surface/50 backdrop-blur-md">
        <span className="material-symbols-outlined">notifications</span>
    </button>
    <div className="relative group flex-shrink-0">
    <button className="relative rounded-full overflow-hidden w-12 h-12 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-md block">
        <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1EihwFP8_o0a4_mlkfBpTLZVJ5ntnfE96wTRheAf8KdwxMPyuR24bdP8gOxgi4fyE46l9sCCKOF7QYlD7fDooxaSXUjeOf9VH1bWbYoCLWPZVsPmEqnBmC1JM43uF0mb5w6QypL-kfzSBdKziVbdbinbGozL_2pQYApk-1UONW25nA7rW2X11e9jGJrO5vEZPXrCXKSQaxyHOQTp2CMCqelK45pDFhyJWv-FoK5cF39noowUdNMTSHCgHRXBV5EW_DRoYUI4zBOM"/>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200">
            <span className="material-symbols-outlined text-white text-lg">edit</span>
        </div>
    </button>
    <div className="absolute top-full right-0 mt-3 w-48 bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_rgba(124,82,170,0.2)] border border-outline-variant/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible translate-y-[-10px] group-hover:translate-y-0 group-focus-within:translate-y-0 transition-all duration-300 ease-out z-50 flex flex-col overflow-hidden">
        <Link href="/settings" className="px-4 py-3 text-sm font-bold text-on-surface hover:bg-primary-container/20 hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">manage_accounts</span>
            Edit Profile
        </Link>
        <button className="px-4 py-3 text-sm font-bold text-error hover:bg-error-container/50 transition-colors flex items-center gap-2 text-left">
            <span className="material-symbols-outlined text-lg">logout</span>
            Sign Out
        </button>
    </div>
</div>
</div>
<main className="md:ml-72 pt-20 md:pt-10 px-6 lg:px-10 pb-24 max-w-7xl mx-auto">
{/* Page Header */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-4xl md:text-5xl font-black text-on-background tracking-tight mb-2">Sweet Stats <span className="text-primary">✨</span></h1>
<p className="text-lg text-on-surface-variant font-medium">Your financial health is looking delicious this month.</p>
</div>
<div className="flex gap-2">
<button className="px-5 py-2 rounded-full bg-surface-container-high text-secondary font-bold text-sm hover:bg-secondary-container transition-colors border border-outline-variant/50">This Month</button>
<button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-medium text-sm hover:bg-surface-container transition-colors border border-outline-variant/50">3 Months</button>
<button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-medium text-sm hover:bg-surface-container transition-colors border border-outline-variant/50">Year</button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
{/* High Level Metric: Net Worth */}
<div className="col-span-1 md:col-span-2 lg:col-span-1 bg-primary rounded-xl p-6 text-on-primary shadow-[0_8px_24px_rgba(224,64,160,0.3)] bouncy-hover flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-6 -top-6 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
<div>
<div className="flex items-center gap-2 mb-1 opacity-90">
<span className="material-symbols-outlined text-sm">account_balance</span>
<span className="font-medium text-sm uppercase tracking-wider">Total Sugar Stash</span>
</div>
<div className="text-4xl font-black tracking-tight mb-1">$42,850</div>
<div className="inline-flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full text-xs font-bold">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                        +12.4% vs last month
                    </div>
</div>
<div className="mt-8">
<button className="w-full py-2 bg-white text-primary font-bold rounded-full hover:bg-primary-fixed transition-colors shadow-sm">View Details</button>
</div>
</div>
{/* Cash Flow Wave (Chart Placeholder) */}
<div className="col-span-1 md:col-span-3 lg:col-span-3 bg-surface rounded-xl p-6 card-shadow card-shadow-hover bouncy-hover border border-outline-variant/30 flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-bold text-on-background flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">waves</span>
                            Cash Flow Wave
                        </h3>
<p className="text-sm text-on-surface-variant">Income vs Expenses over the last 30 days</p>
</div>
<div className="flex gap-3 text-sm font-medium">
<div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-tertiary"></div> Income</div>
<div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-primary"></div> Expenses</div>
</div>
</div>
{/* Simulated Bar Chart */}
<div className="flex-1 flex items-end gap-2 md:gap-4 h-48 mt-4 relative">
{/* Grid lines */}
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
<div className="w-full border-b border-on-background"></div>
<div className="w-full border-b border-on-background"></div>
<div className="w-full border-b border-on-background"></div>
<div className="w-full border-b border-on-background"></div>
</div>
{/* Bars (Generated via loop mentally) */}
<div className="flex-1 group flex flex-col justify-end items-center h-full relative">
<div className="w-full max-w-[20px] bg-tertiary rounded-t-full chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "60%"}}></div>
<div className="w-full max-w-[20px] bg-primary/80 rounded-t-full absolute bottom-0 chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "40%", "mixBlendMode": "multiply"}}></div>
<span className="text-xs text-on-surface-variant mt-2 hidden md:block">W1</span>
</div>
<div className="flex-1 group flex flex-col justify-end items-center h-full relative">
<div className="w-full max-w-[20px] bg-tertiary rounded-t-full chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "80%"}}></div>
<div className="w-full max-w-[20px] bg-primary/80 rounded-t-full absolute bottom-0 chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "30%", "mixBlendMode": "multiply"}}></div>
<span className="text-xs text-on-surface-variant mt-2 hidden md:block">W2</span>
</div>
<div className="flex-1 group flex flex-col justify-end items-center h-full relative">
<div className="w-full max-w-[20px] bg-tertiary rounded-t-full chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "50%"}}></div>
<div className="w-full max-w-[20px] bg-primary/80 rounded-t-full absolute bottom-0 chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "70%", "mixBlendMode": "multiply"}}></div>
<span className="text-xs text-on-surface-variant mt-2 hidden md:block">W3</span>
</div>
<div className="flex-1 group flex flex-col justify-end items-center h-full relative">
<div className="w-full max-w-[20px] bg-tertiary rounded-t-full chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "90%"}}></div>
<div className="w-full max-w-[20px] bg-primary/80 rounded-t-full absolute bottom-0 chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "45%", "mixBlendMode": "multiply"}}></div>
<span className="text-xs text-on-surface-variant mt-2 hidden md:block">W4</span>
</div>
<div className="flex-1 group flex flex-col justify-end items-center h-full relative">
<div className="w-full max-w-[20px] bg-tertiary rounded-t-full chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "75%"}}></div>
<div className="w-full max-w-[20px] bg-primary/80 rounded-t-full absolute bottom-0 chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "50%", "mixBlendMode": "multiply"}}></div>
<span className="text-xs text-on-surface-variant mt-2 hidden md:block">W5</span>
</div>
</div>
</div>
{/* Category Cloud (Spending Breakdown) */}
<div className="col-span-1 md:col-span-2 bg-surface rounded-xl p-6 card-shadow card-shadow-hover bouncy-hover border border-outline-variant/30">
<h3 className="text-xl font-bold text-on-background mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">pie_chart</span>
                    Category Cloud
                </h3>
<div className="flex flex-wrap gap-3">
{/* Cloud Items */}
<div className="bg-primary-container text-on-primary-container px-4 py-3 rounded-full flex items-center gap-2 hover:scale-105 cursor-pointer transition-transform shadow-[0_4px_12px_rgba(240,128,192,0.2)]">
<span className="material-symbols-outlined text-sm">restaurant</span>
<span className="font-bold">Dining out</span>
<span className="bg-surface/50 px-2 py-0.5 rounded-full text-xs">35%</span>
</div>
<div className="bg-secondary-container text-on-secondary-container px-4 py-3 rounded-full flex items-center gap-2 hover:scale-105 cursor-pointer transition-transform shadow-[0_4px_12px_rgba(238,220,255,0.4)]">
<span className="material-symbols-outlined text-sm">shopping_bag</span>
<span className="font-bold">Shopping</span>
<span className="bg-surface/50 px-2 py-0.5 rounded-full text-xs">25%</span>
</div>
<div className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 cursor-pointer transition-transform shadow-[0_4px_12px_rgba(200,234,255,0.4)]">
<span className="material-symbols-outlined text-sm">bolt</span>
<span className="font-bold">Utilities</span>
<span className="bg-surface/50 px-2 py-0.5 rounded-full text-xs">15%</span>
</div>
<div className="bg-surface-container-highest text-on-surface px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 cursor-pointer transition-transform border border-outline-variant">
<span className="material-symbols-outlined text-sm">directions_car</span>
<span className="font-bold">Transport</span>
<span className="bg-surface/50 px-2 py-0.5 rounded-full text-xs">10%</span>
</div>
<div className="bg-primary-fixed text-on-primary-fixed px-3 py-2 rounded-full flex items-center gap-2 hover:scale-105 cursor-pointer transition-transform border border-outline-variant">
<span className="material-symbols-outlined text-sm">movie</span>
<span className="font-bold">Entertainment</span>
<span className="bg-surface/50 px-2 py-0.5 rounded-full text-xs">10%</span>
</div>
<div className="bg-surface-container-highest text-on-surface px-3 py-1.5 rounded-full flex items-center gap-2 hover:scale-105 cursor-pointer transition-transform border border-outline-variant opacity-70">
<span className="font-medium text-sm">Other 5%</span>
</div>
</div>
</div>
{/* Goal Tracking */}
<div className="col-span-1 md:col-span-1 lg:col-span-2 bg-surface rounded-xl p-6 card-shadow card-shadow-hover border border-outline-variant/30">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-bold text-on-background flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">flag</span>
                        Goal Tracking
                    </h3>
<button className="text-primary font-bold text-sm hover:underline">View All</button>
</div>
<div className="space-y-6">
{/* Goal 1 */}
<div className="group cursor-pointer">
<div className="flex justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-sm">flight_takeoff</span>
</div>
<span className="font-bold text-on-background">Vacation Fund</span>
</div>
<span className="font-bold text-secondary">$3,200 / $5,000</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden shadow-inner">
<div className="bg-secondary h-3 rounded-full progress-bar-fill shadow-[0_0_10px_rgba(124,82,170,0.5)]" style={{"width": "64%"}}></div>
</div>
<p className="text-xs text-on-surface-variant mt-1 text-right group-hover:text-secondary transition-colors">64% - Almost there!</p>
</div>
{/* Goal 2 */}
<div className="group cursor-pointer">
<div className="flex justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-sm">home</span>
</div>
<span className="font-bold text-on-background">New Couch</span>
</div>
<span className="font-bold text-tertiary">$800 / $1,200</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden shadow-inner">
<div className="bg-tertiary h-3 rounded-full progress-bar-fill shadow-[0_0_10px_rgba(0,150,204,0.5)]" style={{"width": "75%"}}></div>
</div>
</div>
</div>
</div>
{/* Yearly Forecast Banner */}
<div className="col-span-1 md:col-span-3 lg:col-span-4 bg-gradient-to-r from-primary-fixed via-secondary-container to-tertiary-fixed rounded-xl p-8 card-shadow flex flex-col md:flex-row items-center justify-between relative overflow-hidden bouncy-hover">
{/* Decorative background pattern */}
<div className="absolute inset-0 opacity-20 pointer-events-none" style={{"backgroundImage": "radial-gradient(#e040a0 2px, transparent 2px)", "backgroundSize": "20px 20px"}}></div>
<div className="relative z-10 md:w-2/3 mb-6 md:mb-0">
<span className="inline-block px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-xs font-bold text-primary mb-3">AI PREDICTION</span>
<h3 className="text-2xl font-black text-on-background mb-2">Yearly Forecast Looks Bright! ☀️</h3>
<p className="text-on-surface-variant font-medium">Based on your current spending habits, you're on track to save <span className="font-bold text-primary">$12,400</span> by the end of the year. Keep up the sweet work!</p>
</div>
<div className="relative z-10">
<button className="px-8 py-4 bg-on-background text-surface font-bold rounded-full shadow-[0_8px_16px_rgba(46,26,40,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                        View Full Forecast
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</main>


    </>
  );
}
