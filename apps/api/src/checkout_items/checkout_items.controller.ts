import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckoutItemsService } from './checkout_items.service';
import { CreateCheckoutItemDto } from './dto/create-checkout_item.dto';
import { UpdateCheckoutItemDto } from './dto/update-checkout_item.dto';

@Controller('checkout-items')
export class CheckoutItemsController {
  constructor(private readonly checkoutItemsService: CheckoutItemsService) {}

  @Post()
  create(@Body() createCheckoutItemDto: CreateCheckoutItemDto) {
    return this.checkoutItemsService.create(createCheckoutItemDto);
  }

  @Get()
  findAll() {
    return this.checkoutItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkoutItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckoutItemDto: UpdateCheckoutItemDto) {
    return this.checkoutItemsService.update(+id, updateCheckoutItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkoutItemsService.remove(+id);
  }
}
