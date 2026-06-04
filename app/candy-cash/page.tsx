"use client";
import { useState } from "react";
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import AddButton from '@/app/components/AddButton';
export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      
{/* TopAppBar */}
<header className="md:hidden fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 py-3 bg-surface/80 backdrop-blur-md border-b border-outline-variant dark:border-outline shadow-[0_4px_20px_rgba(224,64,160,0.1)]">
<button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-primary hover:bg-primary-container/20 active:scale-95 transition-all rounded-full mr-2"><span className="material-symbols-outlined text-3xl">menu</span></button>

<div className="flex items-center gap-4 md:pl-72 transition-all duration-300">
{/* Search on Left as requested by JSON */}
<div className="relative hidden sm:flex items-center">
<span className="material-symbols-outlined absolute left-3 text-on-surface-variant pointer-events-none">search</span>
<input className="bg-surface-container-high text-on-surface rounded-full py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary w-64 font-body transition-all duration-300 focus:w-72" placeholder="Search joy..." type="text"/>
</div>
{/* Mobile Brand Logo fallback */}
<div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic tracking-tight">Candy Cash</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-primary-container/20 hover:scale-105 active:scale-95 transition-all duration-200">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-primary-container/20 hover:scale-105 active:scale-95 transition-all duration-200">
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
{/* SideNavBar */}
<Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
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
<main className="pt-24 md:pl-80 px-6 md:px-6 pb-12 w-full min-h-screen bg-candy-pattern">
{/* Welcome Header & AI Badge */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h2 className="text-3xl font-black text-on-background font-headline tracking-tight">Your Money, Sweeter. 🍬</h2>
<p className="text-on-surface-variant mt-1 text-lg">Here is your financial snapshot for this month.</p>
</div>
{/* Sparkle Badge for AI Insights */}
<div className="flex items-center gap-2 bg-primary-fixed text-on-primary-fixed-variant px-5 py-3 rounded-full shadow-surface-playful bouncy-hover cursor-pointer border border-primary/20">
<span className="material-symbols-outlined text-primary animate-pulse">auto_awesome</span>
<span className="font-bold text-sm">You're on track to save 15% more this year!</span>
<span className="material-symbols-outlined text-on-surface-variant ml-2 text-sm">arrow_forward_ios</span>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Joy Cards Row (Top) */}
{/* Total Balance */}
<div className="md:col-span-4 bg-primary rounded-lg p-6 text-on-primary shadow-primary-playful bouncy-hover relative overflow-hidden flex flex-col justify-between min-h-[160px]">
<div className="absolute -right-6 -top-6 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
<div>
<div className="flex justify-between items-center opacity-90 mb-2">
<span className="font-medium text-lg">Total Joy Balance</span>
<span className="material-symbols-outlined">account_balance</span>
</div>
<div className="text-4xl font-black tracking-tighter">$14,250.00</div>
</div>
<div className="mt-4 flex items-center gap-1 text-sm bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
<span className="material-symbols-outlined text-base">trending_up</span>
<span className="font-bold">+4.5% from last month</span>
</div>
</div>
{/* Monthly Income */}
<div className="md:col-span-4 bg-secondary rounded-lg p-6 text-on-secondary shadow-secondary-playful bouncy-hover relative overflow-hidden flex flex-col justify-between min-h-[160px]">
<div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
<div>
<div className="flex justify-between items-center opacity-90 mb-2">
<span className="font-medium text-lg">Sweet Income</span>
<span className="material-symbols-outlined">arrow_downward</span>
</div>
<div className="text-4xl font-black tracking-tighter">$6,800.50</div>
</div>
<div className="mt-4 flex gap-2">
<div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden">
<div className="bg-white w-[85%] h-full rounded-full"></div>
</div>
</div>
</div>
{/* Monthly Expenses */}
<div className="md:col-span-4 bg-tertiary rounded-lg p-6 text-on-tertiary shadow-tertiary-playful bouncy-hover relative overflow-hidden flex flex-col justify-between min-h-[160px]">
<div className="absolute -left-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
<div>
<div className="flex justify-between items-center opacity-90 mb-2">
<span className="font-medium text-lg">Fun Expenses</span>
<span className="material-symbols-outlined">arrow_upward</span>
</div>
<div className="text-4xl font-black tracking-tighter">$2,450.25</div>
</div>
<div className="mt-4 flex items-center gap-1 text-sm bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
<span className="material-symbols-outlined text-base">check_circle</span>
<span className="font-bold">Under budget!</span>
</div>
</div>
{/* Main Candy Chart Area */}
<div className="md:col-span-8 bg-surface rounded-lg p-6 shadow-surface-playful bouncy-hover border border-outline-variant/30 flex flex-col h-[400px]">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-bold text-on-surface">Joyful Trends</h3>
<div className="flex gap-2 bg-surface-container-high rounded-full p-1">
<button className="px-4 py-1.5 rounded-full bg-surface shadow-sm text-sm font-bold text-primary">Week</button>
<button className="px-4 py-1.5 rounded-full text-sm font-medium text-on-surface-variant hover:text-primary">Month</button>
</div>
</div>
{/* Stylized CSS/SVG Chart Representation */}
<div className="flex-1 relative w-full flex items-end justify-between px-4 pb-8 border-b-2 border-surface-dim">
{/* Chart decorative background */}
<div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-50 rounded-b-lg"></div>
{/* Bars/Points */}
<div className="relative w-12 h-[40%] bg-tertiary-fixed rounded-t-lg group cursor-pointer hover:bg-tertiary transition-colors">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-xs font-bold py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$450</div>
</div>
<div className="relative w-12 h-[65%] bg-secondary-fixed rounded-t-lg group cursor-pointer hover:bg-secondary transition-colors">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-xs font-bold py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$820</div>
</div>
<div className="relative w-12 h-[50%] bg-primary-fixed rounded-t-lg group cursor-pointer hover:bg-primary transition-colors">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-xs font-bold py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$610</div>
</div>
<div className="relative w-12 h-[85%] bg-primary rounded-t-lg group cursor-pointer shadow-[0_0_15px_rgba(224,64,160,0.5)]">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-xs font-bold py-1 px-2 rounded-lg opacity-100 whitespace-nowrap">$1,250</div>
</div>
<div className="relative w-12 h-[30%] bg-tertiary-fixed rounded-t-lg group cursor-pointer hover:bg-tertiary transition-colors">
</div>
<div className="relative w-12 h-[75%] bg-secondary-fixed rounded-t-lg group cursor-pointer hover:bg-secondary transition-colors">
</div>
</div>
<div className="flex justify-between px-6 mt-4 text-sm font-bold text-on-surface-variant">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
</div>
</div>
{/* Source Snapshot (Donuts) */}
<div className="md:col-span-4 flex flex-col gap-6 h-full">
{/* Top Donut Card */}
<div className="flex-1 bg-surface rounded-lg p-6 shadow-surface-playful bouncy-hover border border-outline-variant/30 flex items-center justify-between">
<div>
<h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">Top Spend</h3>
<div className="text-2xl font-black text-on-surface">Dining Out</div>
<div className="text-primary font-bold mt-2">$840.00</div>
</div>
{/* CSS Donut Representation */}
<div className="w-20 h-20 rounded-full border-8 border-surface-container-high border-t-primary border-r-primary flex items-center justify-center transform -rotate-45">
<div className="transform rotate-45 text-sm font-bold text-primary">45%</div>
</div>
</div>
{/* Bottom Donut Card */}
<div className="flex-1 bg-surface rounded-lg p-6 shadow-surface-playful bouncy-hover border border-outline-variant/30 flex items-center justify-between">
<div>
<h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">Top Income</h3>
<div className="text-2xl font-black text-on-surface">Freelance</div>
<div className="text-secondary font-bold mt-2">$3,200.00</div>
</div>
{/* CSS Donut Representation */}
<div className="w-20 h-20 rounded-full border-8 border-surface-container-high border-b-secondary border-l-secondary flex items-center justify-center transform rotate-45">
<div className="transform -rotate-45 text-sm font-bold text-secondary">60%</div>
</div>
</div>
</div>
{/* Recent Transactions Glassmorphism List */}
<div className="md:col-span-12 bg-surface/60 backdrop-blur-xl rounded-lg p-6 shadow-surface-playful border border-white/50 mt-4">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-bold text-on-surface">Recent Joy Moves</h3>
<button className="text-primary font-bold text-sm hover:underline">View All</button>
</div>
<div className="space-y-4">
{/* Tx 1 */}
<div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined">restaurant</span>
</div>
<div>
<div className="font-bold text-on-surface">Candy Cafe</div>
<div className="text-sm text-on-surface-variant">Food &amp; Drink • Today</div>
</div>
</div>
<div className="font-black text-on-surface">-$24.50</div>
</div>
{/* Tx 2 */}
<div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">shopping_bag</span>
</div>
<div>
<div className="font-bold text-on-surface">Fashion Boutique</div>
<div className="text-sm text-on-surface-variant">Shopping • Yesterday</div>
</div>
</div>
<div className="font-black text-on-surface">-$120.00</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
