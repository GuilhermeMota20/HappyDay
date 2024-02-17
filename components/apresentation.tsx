type Props = {
  name: string;
  styleTitle: string;
  styleName: string;
  styleContent?: string;
};

export default function Apresentation({ name, styleContent, styleTitle, styleName }: Props) {
  return (
    <>
      <div className={`relative w-full flex flex-col items-center gap-4 text-center ${styleContent}`}>
        <h3 className="font-medium text-lg md:font-semibold md:text-2xl text-slate-800">
          Ola, sejam bem vindos ao...
        </h3>

        <h1 className={`text-4xl md:text-7xl uppercase font-extrabold  leading-10 ${styleTitle}`}>
          HappyDay
          <br />
          <span className={`"text-4xl md:text-5xl ${styleName}`}>
            {name}
          </span>
        </h1>

        <h3 className="font-medium text-lg md:font-semibold md:text-2xl text-slate-800">
          Venha comemorar essa data conosco!
        </h3>
      </div>
    </>
  )
}