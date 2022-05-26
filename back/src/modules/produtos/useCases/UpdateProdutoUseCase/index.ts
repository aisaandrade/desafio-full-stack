import { UpdateProdutoController } from "./UpdateProdutoController";
import { UpdateProdutoUseCase } from "./UpdateProdutoUseCase"; 
import { ProdutoRepository } from "../../../../repositories/ProdutoRepository";

const produtoRepository = new ProdutoRepository()
const updateprodutoUseCase = new UpdateProdutoUseCase(produtoRepository);
const updateprodutoControler = new UpdateProdutoController(updateprodutoUseCase);

export { updateprodutoUseCase, updateprodutoControler };