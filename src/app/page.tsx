"use client"

import React, { FormEvent, useEffect, useState } from "react";
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

import bg from "../assets/image/top.svg";

import axios from "axios";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import data from "./data";
import { useRouter } from "next/navigation";
import { CirclesWithBar, Grid } from "react-loader-spinner";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [kvkk, setKvkk] = useState(false);

  const [error, setError] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [counter, setCounter] = useState(6);

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

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const school_number = formData.get("school_number");
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const department = formData.get("department");
    const school = "İzmir Yüksek Teknoloji Enstitüsü";


    await axios.post("https://yazilim-server.azurewebsites.net/api/members/newMember", {
      "school_number": school_number,
      "name": name,
      "phone": phone,
      "email": email,
      "department": department,
      "school": school
    })
      .then((res) => {
        console.log(res.status);
        if (res.status == 201) {
          console.log(res.status);
          setUserExist(true);
        }
        else {
          setTimeout(() => {
            setComplete(true);
          }, 1500);
        }
      })
      .catch((err) => {
        setError(true);
      });
  }

  useEffect(() => {
    if (counter > 0 && complete) {
      setTimeout(() => setCounter(counter - 1), 1000)
    }
    else if (counter == 0) {
      setTimeout(() => {
        window.open("https://chat.whatsapp.com/GGXEVUKPtyqKgq5y7DzgsE", "_blank")
      }, 750);
      setTimeout(() => router.push("/welcome"), 1000);
    }
  }, [counter, complete, router])

  return (
    <div>
      <div className="absolute w-screen max-w-md">
        <button onClick={() => router.push("/eng")} className="absolute right-5 top-8 max-w-md underline text-black">🇬🇧 eng</button>
      </div>

      {/* Topluluk Kuralları Mesaj Ekranı */}
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title">
            Yazılım Topluluğu
          </Typography>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Topluluk Kuralları
          </Typography>

          <div dangerouslySetInnerHTML={{ __html: data.rules }} className="mt-4 h-[55vh] text-sm border-[1px] p-2 border-black rounded-lg overflow-y-scroll"></div>

          <div className="flex justify-end">
            <button type="button" onClick={() => setIsOpen(false)} className="p-2 bg-orange-400 text-white rounded-xl mt-5">Okudum</button>
          </div>
        </Box>
      </Modal>

      {/* KVKK Metni Mesaj Ekranı */}
      <Modal
        open={kvkk}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title">
            Yazılım Topluluğu
          </Typography>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            KVKK Metni
          </Typography>

          <div dangerouslySetInnerHTML={{ __html: data.kvkk }} className="mt-4 h-[55vh] border-[1px] p-2 border-black rounded-lg overflow-y-scroll"></div>

          <div className="flex justify-end">
            <button type="button" onClick={() => setKvkk(false)} className="p-2 bg-orange-400 text-white rounded-xl mt-5">Okudum</button>
          </div>
        </Box>
      </Modal>

      {/* Loader */}
      <Modal
        open={loading}
        // onClose={() => }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
          complete ?
            (
              <Box sx={style}>
                <div className="flex flex-col justify-center items-center px-4">
                  <CirclesWithBar
                    height="90"
                    width="90"
                    color="#4dc247"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    outerCircleColor=""
                    innerCircleColor=""
                    barColor=""
                    ariaLabel='circles-with-bar-loading'
                  />
                  <p className="text-[64px] font-bold text-center mt-4">{counter}</p>
                  <p className="mt-4 text-lg font-bold mb-2 text-center">WhatsApp Grubuna Yönlendiriliyorsunuz</p>
                  <p className="text-sm max-w-[300px] text-center">Topluluk Etkinlikleri ve Duyuruları WhatsApp Gruplarından Yapılacaktır.</p>
                </div>
              </Box>
            ) :
            userExist ?
              (
                <Box sx={style}>
                  <div className="flex flex-col justify-center items-center px-4">
                    <p className="mt-4 text-lg font-bold mb-2 text-center">Üye Kaydınız Bulunmaktadır</p>
                    <p className="text-sm max-w-[350px] text-center">Topluluk etkinlikleri ve duyurukarı WhatsApp gruplarımızdan yapılmaktadır. WhatsApp grubunda değilseniz aşağıdaki butona basarak gruba girebilirsiniz. Sertifikanızı almak isterseniz Sertifika Sayfasına Git butonuna basarak ulaşabilirsiniz.</p>
                    <p className="text-xs max-w-[350px] text-center mt-2">NOT: WhatsApp grubuna girdikten sonra otomatik olarak Sertifika sayfasına yönlendirileceksiniz.</p>
                    <div className="flex flex-col gap-3 w-full items-center mt-4">
                      <button onClick={() => {
                        setComplete(true);
                      }} className="py-2 w-full max-w-xs bg-green-600 rounded-lg text-white">WhatsApp Grubuna Gir</button>
                      <button onClick={() => {
                        router.push("/eng/welcome")
                      }} className="py-2 w-full max-w-xs bg-yellow-500 rounded-lg text-white">Sertifika Sayfasına Git</button>
                      <button onClick={() => {
                        setLoading(false);
                        setUserExist(false);
                      }} className="py-2 w-full max-w-xs rounded-lg">Geri Dön</button>
                    </div>
                  </div>
                </Box>
              ) :
              error ?
                (
                  <Box sx={style}>
                    <div className="flex flex-col justify-center items-center px-4">
                      <p className="text-[64px] font-bold text-center mt-4">HATA</p>
                      <p className="text-sm max-w-[300px] text-center">Sistem şu anda çalışmamakta ya da anlık bir hata oluşmaktadır. Tekrar deneyiniz, eğer sorunla tekrar karşılaşırsanız lütfen yöneticileri bilgilendiriniz.</p>
                      <div className="mt-5 flex flex-col items-center">
                        <p>yazilim@iyte.edu.tr</p>
                        <a className="underline text-blue-700 mt-2" href="https://card.iyteyazilim.com/" target="_blank" rel="noopener noreferrer">Yöneticiler</a>
                      </div>

                      <button onClick={() => {
                        setLoading(false);
                        setError(false);
                      }} className="py-2 w-full max-w-xs rounded-lg mt-4">Geri Dön</button>
                    </div>
                  </Box>
                ) :
                (
                  <Box sx={style}>
                    <div className="flex flex-col justify-center items-center px-4">
                      <Grid
                        height="90"
                        width="90"
                        color="#FEA236"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='circles-with-bar-loading'
                      />
                      <p className="mt-6">Kayıt Olma İşlemi Sürüyor</p>
                    </div>
                  </Box>
                )
        }
      </Modal>

      <Image src={bg} className='w-full pointer-events-none' alt={"image"} />

      <div className='flex flex-col px-8 text-black'>
        <form onSubmit={onSubmit} className='flex flex-col gap-4 -mt-16'>
          <input required type="number" name="school_number" placeholder='Okul Numaran (i.e. 210201042)' className='inputStyle' />

          <input required type="text" name="name" placeholder='İsim Soyisim Giriniz' className='inputStyle' />

          <input required type="tel" name="phone" placeholder='Telefon Numaranızı Giriniz' className='inputStyle ' />

          <input required type="email" name="email" placeholder='Emailinizi Giriniz' className='inputStyle ' />

          <select name="department" defaultValue="--Okuduğunuz/Bitirdiğiniz Bölüm--" required className='inputStyle  bg-white'>
            <option disabled hidden>--Okuduğunuz/Bitirdiğiniz Bölüm--</option>
            <option value="Bilgisayar Mühendisliği">Bilgisayar Mühendisliği</option>
            <option value="Elektronik ve Haberleşme Mühendisliği">Elektronik ve Haberleşme Mühendisliği</option>
            <option value="İnşaat Mühendisliği">İnşaat Mühendisliği</option>
            <option value="Makine Mühendisliği">Makine Mühendisliği</option>
            <option value="Biyomühendislik">Biyomühendislik</option>
            <option value="Çevre Mühendisliği">Çevre Mühendisliği</option>
            <option value="Enerji Sistemleri Mühendisliği">Enerji Sistemleri Mühendisliği</option>
            <option value="Gıda Mühendisliği">Gıda Mühendisliği</option>
            <option value="Kimya Mühendisliği">Kimya Mühendisliği</option>
            <option value="Malzeme Bilimi ve Mühendisliği">Malzeme Bilimi ve Mühendisliği</option>
            <option value="Fizik">Fizik</option>
            <option value="Fotonik">Fotonik</option>
            <option value="Fotonik">Kimya</option>
            <option value="Matematik">Matematik</option>
            <option value="Moleküler Biyoloji ve Genetik">Moleküler Biyoloji ve Genetik</option>
            <option value="Endüstriyel Tasarım">Endüstriyel Tasarım</option>
            <option value="Mimarlık">Mimarlık</option>
            <option value="Şehir ve Bölge Planlama">Şehir ve Bölge Planlama</option>
          </select>

          <div className="w-full flex justify-start items-center mt-4">
            <input required type="checkbox" name="" className="w-5" />
            <p><span onClick={() => setIsOpen(true)} className="underline text-blue-500 ml-2 cursor-pointer">Topluluk Kuralları</span>nı okudum, onaylıyorum</p>
          </div>

          <div className="w-full flex justify-start items-center -mt-3">
            <input required type="checkbox" name="" className="w-5" />
            <p><span onClick={() => setKvkk(true)} className="underline text-blue-500 ml-2 cursor-pointer">KVKK metni</span>ni okudum, onaylıyorum</p>
          </div>

          <div className='flex justify-between items-center mt-4'>
            <h2 className='text-4xl font-bold'>Üye Olun</h2>
            <button type="submit" className='p-5 bg-orange-600 rounded-full'><ArrowForwardIcon sx={{ color: "white" }} /></button>
          </div>
        </form>

        <a href="https://www.instagram.com/iyte_yazilim/" target="_blank" className="insta cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mt-24 mb-3">
          <div className="flex justify-start items-center text-white gap-2">
            <InstagramIcon sx={{ fontSize: "36px" }} />
            <p className="font-bold">Instagram</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">@iyte_yazilim</p>
            <ChevronRightIcon />
          </div>
        </a>

        <a href="https://iyteyazilim.com/" target="_blank" className="website cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mb-10">
          <div className="flex justify-start items-center text-white gap-2">
            <LanguageIcon sx={{ fontSize: "36px" }} />
            <p className="font-bold">Websitemiz</p>
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
                Pop-up'ları engellemediğinizden emin olduktan sonra bilgilerinizle tekrar üye olmayı deneyiniz.
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
    </div>
  )
}
