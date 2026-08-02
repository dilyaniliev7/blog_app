import Badge from "@/ui_components/Badge"
import BlogWriter from "@/ui_components/BlogWriter"
import banner from "../images/detailBanner.jpg"

const DetailPage = () => {
    return (
        <div className="padding-dx max-container py-9">
            <Badge />

            <div className="flex justify-between items-center">
                <h2 className="py-6 leading-normal text-2xl md:text-3xl text-[#181A2A] tracking-wide font-semibold dark:text">
                    Build and Ecommerce Web App with Django and React
                </h2>
            </div>

            <BlogWriter />

            <div className="w-full h-[350px] my-9 overflow-hidden rounded-sm">
                <img className="w-full h-full object-cover rounded-sm" src={banner} />
            </div>

            <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">
                lorem
            </p>
        </div>
    )

}

export default DetailPage