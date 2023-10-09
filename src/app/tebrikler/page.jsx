"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import DiscordIcon from '../../assets/image/discord.svg';
import bg from "../../assets/image/tebrikler.svg";


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import data from "../data";
import { useRouter } from "next/navigation";

import GeneratePdf from "../generatePdf";
import axios from "axios";

export default function Home() {
  const [isExist, setIsExist] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [kvkk, setKvkk] = useState(false);
  
  const handleClose = () => {
    setIsOpen(false);
    setKvkk(false);
  }

  const router = useRouter();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    color: "black",
    maxWidth: "32rem",
    width: "90vw",
    boxShadow: 24,
    paddingX: 2,
    paddingTop: 4,
    paddingBottom: 2,
    borderRadius: "0.5rem",
  };
  

  const iframeRef = useRef();
  const [showIframe, setShowIframe] = useState(false);
  const [memberName, setName] = useState();
  useEffect(() => {
      try {
        const name = localStorage.getItem("name");
        // const school_number = localStorage.getItem("school_number");

        // await axios.post("https://yazilim-server.azurewebsites.net/api/members/checkMember", {"name": name, "school_number": school_number})
        // .then((res) => {
        //   console.log(res.status);
        //   if (res.status == 200) {
        //     console.log(res.status);
        //   }
        // })

        setName(name);
        setIsExist(true);
        const pdfBlob = GeneratePdf(name, "output");
        if (pdfBlob) {
          const objectURL = URL.createObjectURL(pdfBlob);
          iframeRef.current.src = objectURL;
          setShowIframe(true);
          return () => {
            URL.revokeObjectURL(objectURL);
          };
        }
      } catch (error) {
        setIsExist(false);
        setShowIframe(false);
      }
  }, [])

  return (
    <main>
      <Image src={bg} alt="image" className='w-full pointer-events-none' />

      <iframe ref={iframeRef} title="PDF Viewer" className={`mx-auto ${showIframe ? "-mt-20" : null}`} type="application/pdf" height={showIframe ? "300px" : "0px"} width="90%" />

      {
        showIframe ? (
          <div className="flex justify-center mt-3">
            <button type="button" onClick={() => GeneratePdf(memberName, "save")} className="py-2 font-bold px-12 bg-orange-400 rounded-lg"><DownloadIcon /> Sertifikanı İndir</button>
          </div>
        ) : null
      }

      {
        showIframe ? (
          <div className="flex flex-col px-8 text-black mt-8">
            <a href="https://chat.whatsapp.com/GGXEVUKPtyqKgq5y7DzgsE" target="_blank" className="wp cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20  mb-3">
              <div className="flex justify-start items-center text-white gap-2">
                <WhatsAppIcon sx={{ fontSize: "36px"}} />
                <p className="font-bold text-center">WhatsApp Grubumuza Girin</p>
              </div>
              <div className="flex justify-end items-center text-white gap-2">
                {/* <p className="text-xs">@iyte_yazilim</p> */}
                <ChevronRightIcon />
              </div>
            </a>
            <p className="mx-auto text-center text-xs px-10 mt-2 font-light ">NOT: WhatsApp'a yönlendirme işlemi pop-up özelliğinizin kapalı olması nedeniyle engellenmiş olabilir. Tüm duyurularımız ve ekiplerimiz WhatsApp grubumuzdadır. Mutlaka WhatsApp grubuna giriniz.</p>
          </div>
        ) : null
      }

      <div className={`flex flex-col px-8 text-black ${showIframe ? "mt-12" : "-mt-20"}`}>

        <a href="https://discord.gg/657xSPQp5C/" target="_blank" className="discord cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mt-3 mb-3">
          <div className="flex justify-start items-center text-white gap-2">
          <Image alt="image" src={DiscordIcon} className='w-8 pointer-events-none' />
            <p className="font-bold">Discord</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">İYTE Yazılım Topluluğu</p>
            <ChevronRightIcon />
          </div>
        </a>
        
        <a href="https://www.instagram.com/iyte_yazilim/" target="_blank" className="insta cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20  mb-3">
          <div className="flex justify-start items-center text-white gap-2">
            <InstagramIcon sx={{ fontSize: "36px"}} />
            <p className="font-bold">Instagram</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">@iyte_yazilim</p>
            <ChevronRightIcon />
          </div>
        </a>


        <a href="https://www.linkedin.com/company/iyteyazilim/" target="_blank" className="linkedin cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mb-3">
          <div className="flex justify-start items-center text-white gap-2">
            <LinkedInIcon sx={{ fontSize: "36px"}} />
            <p className="font-bold">LinkedIn</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">iyteyazilim</p>
            <ChevronRightIcon />
          </div>
        </a>
        <a href="https://iyteyazilim.com/" target="_blank" className="website cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mb-10">
          <div className="flex justify-start items-center text-white gap-2">
            <LanguageIcon sx={{ fontSize: "36px"}} />
            <p className="font-bold">Website</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">iyteyazilim.com</p>
            <ChevronRightIcon />
          </div>
        </a>
        <h2 className="font-bold text-lg mt-5">Bir sorunla mı karşılaştınız?</h2>
        
        <div className="mt-3 mb-10 relative z-0">
          <Accordion sx={{ position: "relative", zIndex: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography>Bilgilerimi Yanlış Girdim</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lütfen yöneticilerimizle aşağıdaki linkten iletişime geçiniz.
              <br />
              <a className="font-bold" href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>
            </Typography>

          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>WhatsApp Grubuna Giremedim</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Pop-upları engellemediğinizden emin olduktan sonra bilgilerinizle tekrar üye olmayı deneyiniz.
              Otomatik olarak sistem WhatsApp grubuna atacaktır. Sorunun devam etmesi halinde yöneticilerle iletişime geçiniz.
              <br />
              <a className="font-bold" href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Genel Kurul Sertifikamı Alamadım</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                Bilgilerinizle tekrar üye olmayı deneyiniz. Karşınıza sertifika alma ekranı gelecektir.
                Girdiğiniz zaman sertifikanız otomatik olarak indirilecektir.
                Sorunun devamı halinde yöneticilerimizle aşağıdaki linkten iletişime geçiniz.
              <br />
              <a className="font-bold" href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Sertifikamı Linkedine Yükleyemedim</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Belgeyi indirerek yüklemeyi deneyiniz.
              Sorunun devam etmesi halinde yöneticilerle iletişime geçiniz.
              <br />
              <a className="font-bold" href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Okul Numaramı Bilmiyorum</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Okul numarası İYTE Öğrenci kartınız üzerinde yazmaktadır. 9 Haneli öğrenci numaranızın bulunmaması halinde Öğrenci İşlerine başvurunuz.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>İYTE Öğrencisi Değilim Nasıl Üye Olabilirim?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Enstitü Dışı Kayıt Sistemimiz yapım aşamasındadır.
              İnstagram hesabımızı takip ederek sistem aktifleştiği zaman siz de İYTE Yazılım Topluluğu Üyesi olabilirsiniz.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Çift Ana Dal / Yan Dal Yapıyorum Bölüme Ne Yazacağım?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lütfen merkezi yerleştirme ile girdiğiniz bölümü yazınız.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Üniversite Öğrencisi Değilim, Üye Olabiliyor Muyum?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Enstitü Dışı Kayıt Sistemimiz yapım aşamasındadır.
              İnstagram hesabımızı takip ederek sistem aktifleştiği zaman siz de İYTE Yazılım Topluluğu Üyesi olabilirsiniz.
            </Typography>
          </AccordionDetails>
        </Accordion>

        </div>

        <p className="my-6 text-black/60 text-center text-sm">Copyright 2023 © Yazılım Topluluğu</p>
      </div>
    </main>
  )
}
