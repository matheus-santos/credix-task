import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckoutItemDto } from './create-checkout_item.dto';

export class UpdateCheckoutItemDto extends PartialType(CreateCheckoutItemDto) {}
