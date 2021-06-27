import Head from 'next/head'

const About = () => (
  <>
    <Head>
      <title>finkrer.tech</title>
      <meta name="description" content="My cool personal website" />
    </Head>
    <article>
      <h1 className="text-4xl">Hello there.</h1>
      <p>I'm finkrer, and this is my website. Welcome.</p>
      <p>
        I suppose there isn't all that much to see here right now, at least for
        you.
      </p>
      <p>
        I mostly use this site and this server for my own purposes. For you, well, I could add something later...
        Maybe I will write some blog posts, but it's more likely that I am too lazy for that.
      </p>
    </article>
  </>
)

export default About
