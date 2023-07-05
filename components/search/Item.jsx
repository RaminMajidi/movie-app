'use Client'
import ImgLoader from "../imgLoader/ImgLoader";
import TitleDisc from "../titleDisc/TitleDisc";
import BtnReade from "../btnReade/BtnReade";

const Item = ({itemId, title, imgUrl, category, desc }) => {

    return (
        <div className="col-span-10 col-start-2 
        md:col-span-8 md:col-start-3
        lg:col-span-6 flex flex-col sm:flex-row border rounded-xl">
            <div className="w-full sm:w-[30%] min-w-[160px] ">
                <ImgLoader
                style={'rounded-t-xl sm:rounded-s-xl'}
                    src={imgUrl}
                    alt={title} />
            </div>
            <div className="p-3 flex flex-col justify-around relative">
                <TitleDisc title={'Title'} desc={title} 
                style="line-clamp-1" />
                <TitleDisc title={'Ctegory'} desc={category} />
                <TitleDisc title={'Overview'} desc={desc}
                    style="line-clamp-3 text-justify" />
                <BtnReade
                    title={title}
                    classStyle={'max-w-max'}
                    url={`categories/${category}/${itemId}`} />
            </div>
        </div>
    )
}

export default Item