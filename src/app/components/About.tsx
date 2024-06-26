'use client';
import { motion } from 'framer-motion';
import React from 'react';
import raheelImg from '/public/raheel.jpg';
import body from '/public/body.jpeg';
import cancun from '/public/cancun.jpeg';
import nyc from '/public/nyc.jpeg';
import snow from '/public/snow.jpeg';

type Props = {};

export default function About({}: Props) {
	return (
		<div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 tracking-[20px] text-gray-500 text-2xl">About</h3>

			<motion.img
				initial={{
					x: -500,
				}}
                whileInView={{ x: 0 }}
                viewport={{once: true}}
                src="/nyc.jpeg"
                height={400}
                width={400}

			/>
		</div>
	);
}
