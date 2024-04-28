"""Added Association tables and relationship

Revision ID: 24ece070bdb6
Revises: cfb619506690
Create Date: 2024-03-26 13:02:11.870961

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '24ece070bdb6'
down_revision = 'cfb619506690'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('_alembic_tmp_accountings')
    with op.batch_alter_table('accountings', schema=None) as batch_op:
        batch_op.add_column(sa.Column('student_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_accountings_student_id_users'), 'users', ['student_id'], ['id'])

    with op.batch_alter_table('user_departments', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('department_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_user_departments_department_id_departments'), 'departments', ['department_id'], ['id'])
        batch_op.create_foreign_key(batch_op.f('fk_user_departments_user_id_users'), 'users', ['user_id'], ['id'])

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('bio', sa.String(length=255), nullable=True))
        batch_op.add_column(sa.Column('image_url', sa.String(length=255), nullable=True))
        batch_op.add_column(sa.Column('_password_hash', sa.String(), nullable=True))
        batch_op.alter_column('username',
               existing_type=sa.VARCHAR(),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('username',
               existing_type=sa.VARCHAR(),
               nullable=True)
        batch_op.drop_column('_password_hash')
        batch_op.drop_column('image_url')
        batch_op.drop_column('bio')

    with op.batch_alter_table('user_departments', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_user_departments_user_id_users'), type_='foreignkey')
        batch_op.drop_constraint(batch_op.f('fk_user_departments_department_id_departments'), type_='foreignkey')
        batch_op.drop_column('department_id')
        batch_op.drop_column('user_id')

    with op.batch_alter_table('accountings', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_accountings_student_id_users'), type_='foreignkey')
        batch_op.drop_column('student_id')

    op.create_table('_alembic_tmp_accountings',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('account_name', sa.VARCHAR(), nullable=True),
    sa.Column('accounting_status_perterm', sa.VARCHAR(), nullable=True),
    sa.Column('amount_paid', sa.INTEGER(), nullable=True),
    sa.Column('balance', sa.INTEGER(), nullable=True),
    sa.Column('student_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['student_id'], ['users.id'], name='fk_accountings_student_id_users'),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###