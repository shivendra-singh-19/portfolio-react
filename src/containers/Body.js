import { BriefRedirect } from './BriefRedirect';
import { EyeCatcher } from './EyeCatcher';
import { Footer } from './Footer';
import { Header } from './Header';
import { Reviews } from './Reviews';

export function Body() {
    return <>
        <Header />
        <EyeCatcher />
        <BriefRedirect />
        <Reviews />
        <Footer />
    </>
}
