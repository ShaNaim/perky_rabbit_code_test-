<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductUnit extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'unit_name',
        'unit_value',
        'quantity',
        'meg_date',
        'exp_date',
    ];
}
