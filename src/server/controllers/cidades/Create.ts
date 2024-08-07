import { Request, Response } from "express";
// import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
  nome: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});

// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validatedData: ICidade | undefined = undefined;
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validatedData = await bodyValidation.validate(req.body);
    res.json({ data: validatedData });
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: {
        default: yupError.message,
      },
    });
  }
  console.log(validatedData);
};
