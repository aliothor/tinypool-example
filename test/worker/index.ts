import { ThreadWorker } from 'poolifier'

function yourFunction(data: any) {
    console.log(data);
    // this will be executed in the worker thread,
    // the data will be received by using the execute method
    return { ok: 1 }
}

const threadWorker= new ThreadWorker(yourFunction, {
    maxInactiveTime: 60000
})


export default threadWorker