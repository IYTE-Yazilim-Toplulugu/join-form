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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';

import DiscordIcon from '../../../assets/image/discord.svg';
import bg from "../../../assets/image/welcome.svg";


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import data from "../../data";
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

      <Image src={bg} className='w-full pointer-events-none' alt="image" />


      

      <div className='flex flex-col px-8 text-black'>
        <a href="https://discord.gg/657xSPQp5C/" target="_blank" className="discord cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 -mt-12 mb-3">
          <div className="flex justify-start items-center text-white gap-2">
          <Image src={DiscordIcon} className='w-8 pointer-events-none' alt="image" />
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
                Please contact our administrators using the link below.
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
              <Typography>I Could not Join the WhatsApp Group</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Please make sure you're not blocking pop-ups then try registering again with your information again.
                The system will automatically add you to the WhatsApp group. If the problem persists, please contact the administrators.
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
              <Typography>I Could not Receive My General Assembly Certificate</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Please contact our administrators using the link below.
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
              <Typography>I Could not Upload My Certificate to Linkedin</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Try downloading the document and uploading it again.
                If the issue persists, please contact the administrators.
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
              <Typography>I Do not Know My School Number</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Your student number is written on your IYTE Student Card.
                If you do not have a 9-digit student number, please contact the Student Affairs Office.
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
                Our Non-Institute Registration System is under construction.
                Follow our Instagram account to be sure to be informed when system is activated.
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
                Please write the department you entered through student placement.
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
                Our Non-Institute Registration System is under construction.
                Follow our Instagram account to be sure to be informed when system is activated.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>

        <p className="my-6 text-black/60 text-center text-sm">Copyright 2023 © Yazılım Topluluğu</p>
      </div>
    </main>
  )
}
