import { useState } from 'react'

const Explanation = () => {
  const [active, setActive] = useState(false)
  return (
    <section>
      <button
        onClick={() => setActive(!active)}
        className="text-red-700 dashed border-none mt-8 focus:outline-none"
      >
        Что за лог?
      </button>
      {active ? (
        <p>
          Лог - это как блог, только лог. Вообще лог - это как журнал, или
          дневник. На судне, например. Только это на сайте.
          <br />
          На самом деле блог - это и есть web log, но об этом как-то все забыли.
          Теперь под блогом понимаются какие-то крупные статьи. Ну или твиттер.
          А я тут просто пишу, что захочу. Какие-то маленькие заметочки, или
          статьи, если надо.
          <br />К слову, это и дневник мой тоже. Только мои личные записи вам не
          показывает. Во всяком случае, я очень на это надеюсь.
        </p>
      ) : null}
    </section>
  )
}

export default Explanation
