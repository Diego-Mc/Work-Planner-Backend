import Worker from '../models/Worker.js'

/* CREATE */
export const createWorker = async (req, res) => {
  try {
    const { name } = req.body
    const { userId } = req
    const newWorker = new Worker({
      ownerId: userId,
      name,
      shiftTime: '',
    })
    const savedWorker = await newWorker.save()

    res.status(201).json(savedWorker)
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}

/* READ */
export const getWorkers = async (req, res) => {
  try {
    const { userId } = req
    const workers = await Worker.find({ ownerId: userId })
    res.status(200).json(workers)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const getWorker = async (req, res) => {
  try {
    const { workerId } = req.params
    const worker = await Worker.findById(workerId)
    res.status(200).json(worker)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

/* UPDATE */
export const saveWorker = async (req, res) => {
  try {
    const { workerId } = req.params
    const { ownerId, name, shiftTime } = req.body
    const updatedWorker = await Worker.findByIdAndUpdate(
      workerId,
      {
        ownerId,
        name,
        shiftTime,
      },
      { new: true }
    )

    res.status(200).json(updatedWorker)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const setShiftTime = async (req, res) => {
  try {
    const { workerId } = req.params
    const { shiftTime } = req.body

    let worker = await Worker.findById(workerId)
    worker.shiftTime = shiftTime
    worker = await worker.save()

    res.status(200).json(worker)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const resetShiftTimes = async (req, res) => {
  try {
    const { userId } = req

    const workers = await Worker.find({ ownerId: userId })
    const prms = workers.map((worker) => {
      worker.shiftTime = ''
      return worker.save()
    })

    const updatedWorkers = await Promise.all(prms)

    res.status(200).json(updatedWorkers)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const deleteWorker = async (req, res) => {
  try {
    const { workerId } = req.params
    const { userId } = req

    let removedWorker = await Worker.findById(workerId)

    if (removedWorker.ownerId !== userId) throw new Error('Not authorized')

    removedWorker = await Worker.deleteOne({ _id: workerId })
    res.status(200).json(removedWorker)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
