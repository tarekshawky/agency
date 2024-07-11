import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="google-site-verification" content="QB7w0bIGg_3VBosfpXwaiVc1c0hIxpQ0qRe6DC4Muj8"/>
                    {/* Other meta tags */}
                </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </Html>
    );
    }
}

export default MyDocument;
