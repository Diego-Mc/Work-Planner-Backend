import Machine from '../models/Machine.js'
import Worker from '../models/Worker.js'
import Schedule from '../models/Schedule.js'

export const getStatistics = async (req, res) => {
  try {
    const { userId } = req

    // const machines = await Machine.find({ ownerId: userId })
    // const workers = await Worker.find({ ownerId: userId })
    const schedules = await Schedule.find({ ownerId: userId })
      .sort({
        'date.from': -1,
      })
      .exec()
    const lastInMachine = {}
    const timeShifts = {}
    const mTimeShifts = {} //{w1: {morning: {m1: [..] }}}
    const amountWorked = {} //{w1: {m1: [...]}}

    schedules.forEach(({ table, date }) => {
      table.forEach((row) => {
        if (!lastInMachine[row.machine]) lastInMachine[row.machine] = {}
        ;['morning', 'evening', 'night'].forEach((time) => {
          row.data[time].forEach((w) => {
            if (!w) return
            if (!lastInMachine[row.machine][w])
              lastInMachine[row.machine][w] = []
            lastInMachine[row.machine][w].push(date.from)

            if (!timeShifts[w]) timeShifts[w] = {}
            if (!timeShifts[w][time]) timeShifts[w][time] = []
            timeShifts[w][time].push(date.from)

            if (!mTimeShifts[w]) mTimeShifts[w] = {}
            if (!mTimeShifts[w][time]) mTimeShifts[w][time] = {}
            if (!mTimeShifts[w][time][row.machine])
              mTimeShifts[w][time][row.machine] = []
            mTimeShifts[w][time][row.machine].push(date.from)

            if (!amountWorked[w]) amountWorked[w] = {}
            if (!amountWorked[w][row.machine]) amountWorked[w][row.machine] = []
            amountWorked[w][row.machine].push(date.from)
          })
        })
      })
    })

    const statistics = {
      machineTimeShiftsPerWorker: mTimeShifts, //{w1: {morning: {m1: [..] }}}
      timeShiftsPerWorker: timeShifts,
      amountWorkedInMachinePerWorker: amountWorked, //{w1: {m1: [...]}}
      amountWorkedPerMachine: lastInMachine,
    }

    res.status(201).json(statistics)
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}
