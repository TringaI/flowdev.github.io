import style from "../../../styles/index.module.scss";
import Image from "next/image";

function Index() {
    return (
        <div className="w-full grid grid-cols-12 mt-20 mb-20    ">
            <div className="col-span-12 md:col-span-6 flex flex-col pl-20">
                <div className="flex flex-col justify-start">
                    <p className={style.footer_p}><b>Phone Number :</b> +383 (0) 49 267 217</p>
                    <p className={style.footer_p}><b>Email :</b> services.flowdev@gmail.com</p>
                    <br />
                    <div className="flex">
                        <a href="https://www.instagram.com/flowdev.agency/"><Image width={20} height={20} src="/images/icons/instagram.png" alt="" /></a>
                        <a href="https://www.linkedin.com/company/flowdev-agency/" className="ml-[10px]"><Image width={20} height={20} src="/images/icons/in.png" alt="" /></a>
                   
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex justify-end pr-20">
                <Image alt='logo' width={90} height={40} src="/images/logos/flowdev_logo.ico"/>
            </div>
        </div>
    )
}

export default Index