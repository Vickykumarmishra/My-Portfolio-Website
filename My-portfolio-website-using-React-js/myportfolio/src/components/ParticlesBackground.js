import React from 'react'
import Particles from 'react-tsparticles'
import ParticlesConfig from './config/particle-config.js'
export default function ParticlesBackground() {
  return (
    <Particles  params={ParticlesConfig} ></Particles>
  )
}
