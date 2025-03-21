// https://www.terraform.io/docs/providers/aws/r/dx_connection_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxConnectionAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association#connection_id DxConnectionAssociation#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association#id DxConnectionAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association#lag_id DxConnectionAssociation#lag_id}
  */
  readonly lagId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association aws_dx_connection_association}
*/
export class DxConnectionAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dx_connection_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association aws_dx_connection_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DxConnectionAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DxConnectionAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_connection_association',
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
    this._connectionId = config.connectionId;
    this._id = config.id;
    this._lagId = config.lagId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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

  // lag_id - computed: false, optional: false, required: true
  private _lagId?: string; 
  public get lagId() {
    return this.getStringAttribute('lag_id');
  }
  public set lagId(value: string) {
    this._lagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lagIdInput() {
    return this._lagId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      id: cdktf.stringToTerraform(this._id),
      lag_id: cdktf.stringToTerraform(this._lagId),
    };
  }
}
