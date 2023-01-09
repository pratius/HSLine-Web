import Document, { Html, Head, Main, NextScript } from 'next/document';
import '../public/style.css';


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel='stylesheet' id='slick-css'  href='/assets/css/all.min.css' media='all' />
                </Head>
                <body data-spy="scroll" data-offset="80" className="home page-template page-template-full-page page-template-full-page-php page xamin-front-page has-header-image page-two-column colors-light">
                <Main />

                <NextScript />

                {/*<script src='https://iqonic.design/wp-themes/xamin/demo-3/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp'></script>
                <script src="/assets/js/revslider/js/revolution.tools.min.js"></script>
                <script src="/assets/js/revslider/js/rs6.min.js"></script>
                <script src="/assets/js/revslider/js/init.js"></script>*/}
                </body>
            </Html>
        )
    }
}

export default MyDocument
