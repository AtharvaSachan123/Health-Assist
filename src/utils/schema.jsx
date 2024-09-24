import React from 'react'
import { sql } from 'drizzle-orm'
import { integer,varchar,pgTable,serial,text } from 'drizzle-orm/pg-core'
import { id } from 'ethers/lib/utils'

export const Users =pgTable('users',{
    id:serial('id').primaryKey(),
    name:varchar("username").notNull(),
    age:integer("age").notNull(),
    location:varchar ("location").notNull(),
    createBy:varchar("created_by").notNull(),
})

export const Records =pgTable('records',{
    id:serial('id').primaryKey(),
    userId:integer('user_id').references(()=>Users.id).notNull(),
    recordName:varchar('record_name').notNull(),
    analysisResult:varchar('analysis_result').notNull(), 
    kanbanRecord:varchar('kanban_record').notNull(),
    createBy:varchar('created_by').notNull(),

})