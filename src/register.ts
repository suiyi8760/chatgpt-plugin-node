
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import cors from '@fastify/cors'

export function install(fastify: FastifyInstance) {
  // turn on CORS to allows request from cross-origin
  fastify.register(cors, {
    // put your options here
  })
}