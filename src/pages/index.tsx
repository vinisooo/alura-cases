import LinkAnchor from "@/components/Link";

interface iTitleProps{
    children: React.ReactNode;
}

function Title({children}: iTitleProps) {
    return(
        <>
            <h1>{children}</h1>

            <style jsx>{`{
                h1{
                    color: red;
                    font-family: sans-serif;
                }
            }`}</style>
        </>
    )
}

export default function HomePage(){
    return(
        <div>
            <h1>Alura Cases</h1>
            <LinkAnchor href="/faq" name="FAQ" />
        </div>
    )
}
 