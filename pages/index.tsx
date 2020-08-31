import Layout from 'layout/Layout'
import Link from 'next/link'

const Index = () => (
  <Layout title="finkrer.wtf" description="My cool personal website">
    <article>
      <h1 className="text-3xl">Приветики</h1>
      <p>Я Женя! Это мой сайт.</p>
      <p>
        Что у меня тут такое? Наверное, когда-нибудь тут будет мой блог, а еще
        что-нибудь написано про меня и все такое.
      </p>
      <p>
        На самом деле, блог уже есть и работает, но мне надо все доделать,
        прежде чем я буду что-то туда писать.
      </p>
      <p>
        В первую очередь мне интересно разбираться, как работает веб. Для этого
        и был создан этот сайт.
      </p>
      <p>
        Если получится что-то нормальное, я буду рад, и, наверное, напишу в
        блоге, как я все делал.
      </p>
      <p>
        А пока тут особо нечего смотреть. Можете почитать{' '}
        <Link href="/log">
          <a className="text-accent-400 hover:bg-accent-100 hover:text-accent-500">
            лог
          </a>
        </Link>
        , хоть там пока и всего один пост. Или посмотреть{' '}
        <Link href="/login">
          <a className="text-accent-400 hover:bg-accent-100 hover:text-accent-500">
            страничку логина
          </a>
        </Link>
        ... но у вас нет токена. А можно ли взломать логин? Я не знаю,
        попробуйте!
      </p>
    </article>
  </Layout>
)

export default Index
