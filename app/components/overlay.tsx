type OverlayProps = {
    children: React.ReactNode,
    onClick: () => void,
}

export default function Overlay({ children, onClick }: OverlayProps) 
{
    return(
        <div
            className="overlay" 
            onClick={onClick}
            >
            {children}
        </div>
    );
}