<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductUnit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ProductController extends Controller
{
    public function addNewProduct(Request $request){
        $productName = $request->input('name');
        $productDescription = $request->input('description');
        $productUnits = $request->input('unit');
        // TODO : some Validation;


        $newProduct = Product::create([
            'name' => $productName,
            'description' => $productDescription,
        ]);
        foreach ($productUnits as $value) {
        ProductUnit::create([
            'product_id' =>  $newProduct->id,
            'unit_name' =>  $value['unit'],
            'unit_value' => $value['unitValueAmount'],
            'quantity' =>  $value['quantity'],
            'meg_date' =>  $value['mafDate'],
            'exp_date' =>  $value['expDate'],
          ]);
        };

        return response( $newProduct->id,200);
    }

    public function getProduct(Request $request){
        $products = Product::all();

        $withUnitData = DB::table('products')
        ->join('product_units', 'products.id', '=', 'product_units.product_id')
        ->select('products.id', 'product_units.*',)
        ->get();
        $response = [
            'product'=> $products,
            'unitData'=> $withUnitData,
        ];
        return response($response,200);
    }

    public function getProductById($id){
        $products = Product::find($id);

        $withUnitData = DB::table('product_units')->where('product_id', '=', $id)->select('product_units.*',)
        ->get();
        $response = [
            'product'=> $products,
            'unitData'=> $withUnitData,
        ];
        return response($response,200);
    }

    public function updateProductInfoById(Request $request,$id){
        $product = Product::find($id);

        $product->name =  $request->input('name');
        $product->description =$request->input('description');


        $product->save();
        return response($product,200);
    }

    public function updateProductUnitById(Request $request,$id){
        $unit = ProductUnit::find($id);

        $unit->unit_name =  $request->input('unit');
        $unit->unit_value = $request->input('unitValueAmount');
        $unit->quantity =  $request->input('quantity');
        $unit->meg_date =  $request->input('mafDate');
        $unit->exp_date =  $request->input('expDate');

        $unit->save();
        return response($unit,200);
    }
}
