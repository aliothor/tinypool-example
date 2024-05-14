import { DynamicThreadPool, FixedThreadPool, PoolEvents, availableParallelism } from 'poolifier'
import path from 'path'

const pool = new FixedThreadPool(availableParallelism(), path.join(import.meta.dirname, './worker/index.js'), {
    onlineHandler: () => console.info('worker is online'),
    errorHandler: e => console.error(e)
})

pool
    .execute()
    .then(res => {
        console.info(res)
    })
    .catch(err => {
        console.error(err)
    })
    