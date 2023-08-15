import City from "../../models/City.js";

export default async (req,res)=> {
    try {
        let updatedCity = await City.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new:true }
        ).select('name photo mail')
        if (updatedCity) {
            return res.status(200).json({
                success: true,
                message: 'city updated',
                response: updatedCity
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'not updated',
            response: null
        })
    }
}