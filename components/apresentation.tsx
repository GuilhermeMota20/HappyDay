import { InfosInviteAgnes } from "@/app/types/types";

type Props = {
  infos: InfosInviteAgnes;
  styleTitle: string;
  styleName: string;
  styleContent?: string;
};

export default function Apresentation({ infos, styleContent, styleTitle, styleName }: Props) {
  return (
    <>
      <div className={`relative w-full flex flex-col items-center gap-4 text-center ${styleContent}`}>
        <h3 className="font-medium text-lg md:font-semibold md:text-2xl text-slate-800">
          {infos.apresentation.presentation}
        </h3>

        <h1 className={`text-4xl md:text-7xl uppercase font-extrabold  leading-10 ${styleTitle}`}>
          {infos.apresentation.titleOne}
          <br />
          <span className={`"text-4xl md:text-5xl ${styleName}`}>
            {infos.apresentation.titleName}
          </span>
        </h1>

        <h3 className="font-medium text-lg md:font-semibold md:text-2xl text-slate-800">
          {infos.apresentation.subtitle}
        </h3>
      </div>
    </>
  )
}