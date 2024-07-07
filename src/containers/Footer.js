export function Footer() {
    return <div className="footer">
        <FooterInfo />
    </div>
}

function FooterInfo() {
    return <div>
        <div className="contactText">Contact me at:</div>
        <div className="socialMediaContainer">
            <SocialMediaInfo />
        </div>
    </div>
}

function SocialMediaInfo() {
    return <>
        <div className="instaClass"><a href="" className="socialMediaLinks">Instagram</a></div>
        <div className="linkedInClass"><a href="" className="socialMediaLinks">LinkedIn</a></div>
    </>
}