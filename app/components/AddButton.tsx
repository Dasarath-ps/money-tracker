import Link from 'next/link';

export default function AddButton() {
    return (
        <Link 
            href="/add-transaction" 
            className="w-full flex justify-center items-center gap-2 bg-secondary text-on-primary font-bold rounded-full py-4 shadow-[0_4px_16px_rgba(124,82,170,0.3)] hover:scale-[1.03] active:scale-95 transition-all duration-300 ease-out mt-auto"
        >
            <span className="material-symbols-outlined">add</span>
            Add
        </Link>
    );
}
