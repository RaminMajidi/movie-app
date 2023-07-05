'use Client'
import ImgLoader from "../imgLoader/ImgLoader"
import TitleDisc from "../titleDisc/TitleDisc";

const Item = ({ title,imgUrl, category, desc }) => {

    return (
        <div className="col-span-10 col-start-2 
        md:col-span-6 flex flex-col md:flex-row border border-dotted">
            <div className="w-full md:w-[30%] min-w-[180px]">
                <ImgLoader 
                src={imgUrl}
                alt={title}/>
            </div>
            <div className="p-2">
                <TitleDisc title={'Title'} desc={title} />
                <TitleDisc title={'Ctegory'} desc={category} />
                <TitleDisc title={'Overview'} desc={desc}
                    style="line-clamp-4" />
            </div>
        </div>
    )
}

export default Item