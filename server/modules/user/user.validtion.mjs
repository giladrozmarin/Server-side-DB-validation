import Joi from 'joi';

export const schemaInsert = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        last_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

        phone: Joi.string().length(12).required()

})

export const schemaUpdate = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
         ,
        last_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        ,
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

        phone: Joi.string().length(10).regex(/^\d+$/)

})