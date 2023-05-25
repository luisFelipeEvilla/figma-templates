type TriangleProps = { width: number, height: number, color: string }

export default function Triangle(props: TriangleProps) {
    return (
        <div className={`w-0 h-0 
            border-t-[200px] border-t-transparent
            border-l-[80px] border-l-black
            border-b-[200px] border-b-transparent`}
        >

        </div>
    )
}