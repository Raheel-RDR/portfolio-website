'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import heroimg from '/public/heroimg.jpg';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: ['Hi, my name is Raheel Ahmed', 'Full Stack Developer', 'Student of the Game'],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="h-screen flex flex-col space-y-7 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				src={heroimg}
				alt="Raheel Ahmed"
				width={150}
				height={150}
				className="relative rounded-full mx-auto object-cover"
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#85ff4d" />
				</h1>
				<div className="">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experince">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton"> Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
