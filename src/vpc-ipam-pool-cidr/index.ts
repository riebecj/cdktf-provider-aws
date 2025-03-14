// https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpamPoolCidrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr VpcIpamPoolCidr#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#id VpcIpamPoolCidr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#ipam_pool_id VpcIpamPoolCidr#ipam_pool_id}
  */
  readonly ipamPoolId: string;
  /**
  * cidr_authorization_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr_authorization_context VpcIpamPoolCidr#cidr_authorization_context}
  */
  readonly cidrAuthorizationContext?: VpcIpamPoolCidrCidrAuthorizationContext;
}
export interface VpcIpamPoolCidrCidrAuthorizationContext {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#message VpcIpamPoolCidr#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#signature VpcIpamPoolCidr#signature}
  */
  readonly signature?: string;
}

export function vpcIpamPoolCidrCidrAuthorizationContextToTerraform(struct?: VpcIpamPoolCidrCidrAuthorizationContextOutputReference | VpcIpamPoolCidrCidrAuthorizationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    signature: cdktf.stringToTerraform(struct!.signature),
  }
}

export class VpcIpamPoolCidrCidrAuthorizationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcIpamPoolCidrCidrAuthorizationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcIpamPoolCidrCidrAuthorizationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._signature = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._signature = value.signature;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr aws_vpc_ipam_pool_cidr}
*/
export class VpcIpamPoolCidr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_ipam_pool_cidr";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr aws_vpc_ipam_pool_cidr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamPoolCidrConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamPoolCidrConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipam_pool_cidr',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.36.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidr = config.cidr;
    this._id = config.id;
    this._ipamPoolId = config.ipamPoolId;
    this._cidrAuthorizationContext.internalValue = config.cidrAuthorizationContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ipam_pool_id - computed: false, optional: false, required: true
  private _ipamPoolId?: string; 
  public get ipamPoolId() {
    return this.getStringAttribute('ipam_pool_id');
  }
  public set ipamPoolId(value: string) {
    this._ipamPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolIdInput() {
    return this._ipamPoolId;
  }

  // cidr_authorization_context - computed: false, optional: true, required: false
  private _cidrAuthorizationContext = new VpcIpamPoolCidrCidrAuthorizationContextOutputReference(this, "cidr_authorization_context");
  public get cidrAuthorizationContext() {
    return this._cidrAuthorizationContext;
  }
  public putCidrAuthorizationContext(value: VpcIpamPoolCidrCidrAuthorizationContext) {
    this._cidrAuthorizationContext.internalValue = value;
  }
  public resetCidrAuthorizationContext() {
    this._cidrAuthorizationContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrAuthorizationContextInput() {
    return this._cidrAuthorizationContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      id: cdktf.stringToTerraform(this._id),
      ipam_pool_id: cdktf.stringToTerraform(this._ipamPoolId),
      cidr_authorization_context: vpcIpamPoolCidrCidrAuthorizationContextToTerraform(this._cidrAuthorizationContext.internalValue),
    };
  }
}
