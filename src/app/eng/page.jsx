"use client"

import React, { useEffect, useState } from "react";
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

import bg from "../../assets/image/topEng.svg";


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import data from "../data";
import { useRouter } from "next/navigation";


export default function Home() {
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

  return (
    <main>
      <div className="absolute w-screen max-w-md">
        <button onClick={() => router.push("/")} className="absolute right-5 top-8 max-w-md underline text-black">🇹🇷 tr</button>
      </div>

      {/* Topluluk Kuralları Mesaj Ekranı */}
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h8" component="h2">
            Software Society
          </Typography>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Community Guidelines
          </Typography>
          
          <div dangerouslySetInnerHTML={{ __html: data. rules_eng }} className="mt-4 h-[55vh] border-[1px] p-2 border-black rounded-lg overflow-y-scroll"></div>

          <div className="flex justify-end">
            <button type="button" onClick={() => setIsOpen(false)} className="p-2 bg-orange-400 text-white rounded-xl mt-5 px-6">OK</button>
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
          <Typography id="modal-modal-title" variant="h8" component="h2">
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

      <Image src={bg} className='w-full pointer-events-none' />

      <div className='flex flex-col px-8 text-black'>
        <form className='flex flex-col gap-4 -mt-16'>
          <input required type="number" name="studentnumber" placeholder='Student ID (i.e. 210201042)' className='inputStyle' />
          
          <input required type="text" name="name" placeholder='Your Full Name' className='inputStyle' />
          
          <input required type="tel" name="phone" placeholder='Your Phone Number' className='inputStyle ' />

          <input required type="email" name="email" placeholder='Email' className='inputStyle ' />

          <select name="bolum" required className='inputStyle  bg-white'>
          <option disabled selected hidden>--Department You Studied/Completed--</option>
            <option value="Bilgisayar Mühendisliği">Computer Engineering</option>
            <option value="Elektronik ve Haberleşme Mühendisliği">Electronics and Communication Engineering</option>
            <option value="İnşaat Mühendisliği">Civil Engineering</option>
            <option value="Makine Mühendisliği">Mechanical Engineering</option>
            <option value="Biyomühendislik">Bioengineering</option>
            <option value="Çevre Mühendisliği">Environmental Engineering</option>
            <option value="Enerji Sistemleri Mühendisliği">Energy systems Engineering</option>
            <option value="Gıda Mühendisliği">Food Engineering</option>
            <option value="Kimya Mühendisliği">Chemical Engineering</option>
            <option value="Malzeme Bilimi ve Mühendisliği">Material science and Engineering</option>
            <option value="Fizik">Physical</option>
            <option value="Fotonik">Photonics</option>
            <option value="Fotonik">Chemical</option>
            <option value="Matematik">Maths</option>
            <option value="Moleküler Biyoloji ve Genetik">Molecular Biology and Genetics</option>
            <option value="Endüstriyel Tasarım">Industrial Design</option>
            <option value="Mimarlık">Architecture</option>
            <option value="Şehir ve Bölge Planlama">City and Region Planning</option>
          </select>

          <div className="w-full flex justify-start items-center mt-4">
            <input required type="checkbox" name="" className="w-5" />
            <p>I read and accept the<span onClick={() => setIsOpen(true)} className="underline text-blue-500 ml-2 cursor-pointer">Community Guidelines</span></p>
          </div>

          <div className="w-full flex justify-start items-center -mt-3">
            <input required type="checkbox" name="" className="w-5" />
            <p>I read and accept the<span onClick={() => setKvkk(true)} className="underline text-blue-500 ml-2 cursor-pointer">KVKK text</span></p>
          </div>
          
          <div className='flex justify-between items-center mt-4'>
            <h2 className='text-4xl font-bold'>Sign Up</h2>
            <button type="submit" className='p-5 bg-orange-600 rounded-full'><ArrowForwardIcon sx={{ color: "white" }} /></button>
          </div>
        </form>

        <a href="https://www.instagram.com/iyte_yazilim/" target="_blank" className="insta cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mt-24 mb-3">
          <div className="flex justify-start items-center text-white gap-2">
            <InstagramIcon sx={{ fontSize: "36px"}} />
            <p className="font-bold">Instagram</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">@iyte_yazilim</p>
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

        <h2 className="font-bold text-lg mt-5">Encountered a problem?</h2>
        
        <div className="mt-3 mb-10 relative z-0">
          <Accordion sx={{ position: "relative", zIndex: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>I entered my information incorrectly</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>I Couldn't Enter the WhatsApp Group</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>I Couldn't Receive My General Assembly Certificate</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>I Couldn't Upload My Certificate to Linkedin</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>I Don't Know My School Number</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>I am not an IYTE student, how can I become a member?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>I am doing a double major / minor. What should I write in the department?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>I am not a university student, can I become a member?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>

        <p className="my-6 text-black/60 text-center text-sm">Copyright 2023 © Yazılım Topluluğu</p>
      </div>
    </main>
  )
}
