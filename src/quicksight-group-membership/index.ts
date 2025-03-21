// https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightGroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership#aws_account_id QuicksightGroupMembership#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership#group_name QuicksightGroupMembership#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership#id QuicksightGroupMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership#member_name QuicksightGroupMembership#member_name}
  */
  readonly memberName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership#namespace QuicksightGroupMembership#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership aws_quicksight_group_membership}
*/
export class QuicksightGroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_group_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership aws_quicksight_group_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightGroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightGroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_group_membership',
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
    this._awsAccountId = config.awsAccountId;
    this._groupName = config.groupName;
    this._id = config.id;
    this._memberName = config.memberName;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // member_name - computed: false, optional: false, required: true
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      member_name: cdktf.stringToTerraform(this._memberName),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
