// https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamOpenidConnectProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider#client_id_list IamOpenidConnectProvider#client_id_list}
  */
  readonly clientIdList: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider#id IamOpenidConnectProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider#tags IamOpenidConnectProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider#tags_all IamOpenidConnectProvider#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider#thumbprint_list IamOpenidConnectProvider#thumbprint_list}
  */
  readonly thumbprintList: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider#url IamOpenidConnectProvider#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider aws_iam_openid_connect_provider}
*/
export class IamOpenidConnectProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_openid_connect_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider aws_iam_openid_connect_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamOpenidConnectProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IamOpenidConnectProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_openid_connect_provider',
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
    this._clientIdList = config.clientIdList;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._thumbprintList = config.thumbprintList;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_id_list - computed: false, optional: false, required: true
  private _clientIdList?: string[]; 
  public get clientIdList() {
    return this.getListAttribute('client_id_list');
  }
  public set clientIdList(value: string[]) {
    this._clientIdList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdListInput() {
    return this._clientIdList;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // thumbprint_list - computed: false, optional: false, required: true
  private _thumbprintList?: string[]; 
  public get thumbprintList() {
    return this.getListAttribute('thumbprint_list');
  }
  public set thumbprintList(value: string[]) {
    this._thumbprintList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintListInput() {
    return this._thumbprintList;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientIdList),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      thumbprint_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thumbprintList),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
